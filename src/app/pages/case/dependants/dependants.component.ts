import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Course } from 'shared/models/case-model';
import { Finance } from 'shared/models/finance-model';
import { ApiClientService } from 'shared/services/api-client.service';
import { AppService } from 'shared/services/app-service.service';

interface Document {
  name: string;
  createdAt: string;
  createdBy: string;
  updatedBy: string;
  file: string;
}

interface DocumentCategory {
  id: string;
  name: string;
  documents: Document[];
}

@Component({
  selector: 'app-dependants',
  templateUrl: './dependants.component.html',
  styleUrls: ['./dependants.component.scss'],
})
export class DependantsComponent implements OnInit {
  @ViewChild('courseSelect', { read: ElementRef })
  courseSelectRef!: ElementRef;
  activeTabIndex = 0;
  financeForm!: FormGroup;
  loanDocFile: File | null = null;
  anotherLoanDocFile: File | null = null;
  depositDocFile: File | null = null;
  anotherDepositDocFile: File | null = null;

  isEdit: boolean = false;

  caseId: number | null = null;
  financeData: Finance | null = null;
  courses: Course[] = [];

  tabs = [
    { label: 'Evidence of your finances', count: 0 },
    { label: 'Educational Loan', count: 0 },
    { label: 'Deposits paid', count: 0 },
    { label: 'Funds allocation', count: 0 },
  ];

  checkboxOptions = [
    {
      label: 'Company or government sponsorship',
      value: 'company_or_government_sponsorship',
    },
    {
      label: 'University Scholarship or discount',
      value: 'university_scholarship_or_discount',
    },
    { label: 'Educational Loan', value: 'educational_loan' },
    { label: 'Myself or my family', value: 'myself_or_my_family' },
  ];

  constructor(
    private apiClient: ApiClientService,
    private fb: FormBuilder,
    private appService: AppService,
    private toastr: ToastrService
  ) {}
  ngOnInit(): void {
    this.appService.breadCrumbData$.subscribe((data) => {
      this.caseId = data.caseId ?? null;
    });

    this.getFinanceData();
    this.financeForm = this.fb.group({
      course_id: [''],
      course_fees: [''],
      first_year_fees: [''],
      inside_london: [false],
      outside_london: [false],
      living_cost_inside_london: [''],
      living_cost_outside_london: [''],
      total_fund: [{ value: 0, disabled: true }],

      //  need working on them...
      living_cost_plan: this.fb.control<string[]>([]),
      otherSelected: [false],
      // otherValue: [''],
      other: [''],

      education_loan: [''],
      loan_doc: [''],
      another_education_loan: [''],
      another_loan_doc: [''],

      fees_deposit: [''],
      deposit_doc: [''],
      another_deposit: [''],
      another_deposit_doc: [''],

      funds_amount_paid: [''],
      edu_loan_paid: [''],
      fees_outstanding: [{ value: 0, disabled: true }],
    });

    this.financeForm.get('living_cost_inside_london')?.disable();
    this.financeForm.get('inside_london')?.valueChanges.subscribe((value) => {
      if (value) {
        this.financeForm.get('living_cost_inside_london')?.enable();
      } else {
        this.financeForm.get('living_cost_inside_london')?.setValue('');
        this.financeForm.get('living_cost_inside_london')?.disable();
      }
    });

    this.financeForm.get('living_cost_outside_london')?.disable();
    this.financeForm.get('outside_london')?.valueChanges.subscribe((value) => {
      if (value) {
        this.financeForm.get('living_cost_outside_london')?.enable();
      } else {
        this.financeForm.get('living_cost_outside_london')?.setValue('');
        this.financeForm.get('living_cost_outside_london')?.disable();
      }
    });

    this.setupAutoSum();
    this.getCourses();
  }

  patchData(data: Finance) {
    // living_cost_plan: string[];
    // other: string;

    // course: Course;

    const parsedPlan = JSON.parse(data.living_cost_plan);

    this.financeForm.patchValue({
      course_id: data.course.id,

      course_fees: data.course_fees,
      first_year_fees: data.first_year_fees,
      inside_london: !!data.living_cost_inside_london ? true : false,
      outside_london: !!data.living_cost_outside_london ? true : false,
      living_cost_inside_london: data.living_cost_inside_london,
      living_cost_outside_london: data.living_cost_outside_london,
      total_fund: data.total_fund,
      living_cost_plan: parsedPlan,
      otherSelected: !!data.other,
      other: data.other,

      education_loan: data.education_loan,
      another_education_loan: data.another_education_loan,
      fees_deposit: data.fees_deposit,

      another_deposit: data.another_deposit,
      funds_amount_paid: data.funds_amount_paid,
      edu_loan_paid: data.edu_loan_paid,
      fees_outstanding: data.fees_outstanding,
    });
  }

  setupAutoSum() {
    this.financeForm.get('course_fees')?.valueChanges.subscribe(() => {
      this.updateTotalFunding();
    });

    this.financeForm.get('first_year_fees')?.valueChanges.subscribe(() => {
      this.updateTotalFunding();
    });

    this.financeForm
      .get('living_cost_inside_london')
      ?.valueChanges.subscribe(() => {
        this.updateTotalFunding();
      });

    this.financeForm
      .get('living_cost_outside_london')
      ?.valueChanges.subscribe(() => {
        this.updateTotalFunding();
      });

    this.financeForm.get('funds_amount_paid')?.valueChanges.subscribe(() => {
      this.updateFeesOutStanding();
    });

    this.financeForm.get('edu_loan_paid')?.valueChanges.subscribe(() => {
      this.updateFeesOutStanding();
    });
  }

  updateTotalFunding() {
    const courseFee = +this.financeForm.get('course_fees')?.value || 0;
    const studyFee = +this.financeForm.get('first_year_fees')?.value || 0;
    const livingCostInside =
      +this.financeForm.get('living_cost_inside_london')?.value || 0;
    const livingCostOutside =
      +this.financeForm.get('living_cost_outside_london')?.value || 0;
    const total = courseFee + studyFee + livingCostInside + livingCostOutside;

    this.financeForm.get('total_fund')?.setValue(total, { emitEvent: false });
  }

  updateFeesOutStanding() {
    const fundAmountPaid =
      +this.financeForm.get('funds_amount_paid')?.value || 0;
    const eduLoanPaid = +this.financeForm.get('edu_loan_paid')?.value || 0;

    const total = fundAmountPaid + eduLoanPaid;

    this.financeForm
      .get('fees_outstanding')
      ?.setValue(total, { emitEvent: false });
  }

  onLoanDocFile(event: any) {
    this.loanDocFile = event.target.files[0];
  }
  onAnotherLoanDocFile(event: any) {
    this.anotherLoanDocFile = event.target.files[0];
  }
  onDepositDocFile(event: any) {
    this.depositDocFile = event.target.files[0];
  }
  onAnotherDepositDocFile(event: any) {
    this.anotherDepositDocFile = event.target.files[0];
  }

  onCheckboxChange(optionLabel: string, event: any) {
    // const selected: string[] =
    //   this.financeForm.get('living_cost_plan')?.value || [];

    // if (event.target.checked) {
    //   if (!selected.includes(optionLabel)) {
    //     selected.push(optionLabel);
    //   }
    // } else {
    //   const index = selected.indexOf(optionLabel);
    //   if (index !== -1) {
    //     selected.splice(index, 1);
    //   }
    // }

    // this.financeForm.get('living_cost_plan')?.setValue(selected);

    const selected = [...this.financeForm.value.living_cost_plan];
    if (event.target.checked) {
      selected.push(optionLabel);
    } else {
      const index = selected.indexOf(optionLabel);
      if (index > -1) selected.splice(index, 1);
    }
    this.financeForm.patchValue({ living_cost_plan: selected });
  }

  onOtherToggle() {
    const otherSelected = this.financeForm.get('otherSelected')?.value;
    if (otherSelected) {
      // Uncheck and disable other checkboxes
      this.financeForm.patchValue({ living_cost_plan: [] });
    } else {
      // Clear other input when unchecked
      this.financeForm.patchValue({ other: '' });
    }
  }

  getCourses() {
    this.apiClient.get('courses', {}).subscribe((resp: any) => {
      this.courses = resp.result.map((course: any) => ({
        id: course.id,
        name: course.name,
      }));
    });
  }

  onCourseChange($event: any) {
    setTimeout(() => {
      const input: HTMLInputElement | null =
        this.courseSelectRef.nativeElement.querySelector('input');
      if (input) {
        input.blur();
      }
    }, 10);
  }

  onSubmit(value: number) {
    let formData: FormData | null = null;

    if (value === 1) {
      const financeEvidenceInfo: any = this.getFinanceEvidence();
      formData = this.makeFormData(financeEvidenceInfo);
      formData.forEach((value, key) => {
        console.log(`${key}:`, value);
      });
    } else if (value === 2) {
      const educationalLoanInfo: any = this.getEducationalLoan();
      formData = this.makeFormData(educationalLoanInfo);
      formData.forEach((value, key) => {
        console.log(`${key}:`, value);
      });
    } else if (value === 3) {
      const depositPaidInfo: any = this.getDepositPaid();
      formData = this.makeFormData(depositPaidInfo);
      formData.forEach((value, key) => {
        console.log(`${key}:`, value);
      });
    } else if (value === 4) {
      const fundsAllocationInfo: any = this.getFundsAllocation();
      formData = this.makeFormData(fundsAllocationInfo);
      formData.forEach((value, key) => {
        console.log(`${key}:`, value);
      });
    }

    if (!this.isEdit) {
      this.addFinance(formData!);
    } else {
      this.updateFinance(formData!);
    }
  }

  getFinanceEvidence() {
    const controls = [
      'course_id',
      'course_fees',
      'first_year_fees',
      'living_cost_inside_london',
      'living_cost_outside_london',
      'total_fund',
      'living_cost_plan',
      'other',
    ];

    return controls;
  }

  getEducationalLoan() {
    const controls = [
      'education_loan',
      'loan_doc',
      'another_education_loan',
      'another_loan_doc',
    ];

    return controls;
  }

  getDepositPaid() {
    const controls = [
      'fees_deposit',
      'deposit_doc',
      'another_deposit',
      'another_deposit_doc',
    ];

    return controls;
  }

  getFundsAllocation() {
    const controls = ['funds_amount_paid', 'edu_loan_paid', 'fees_outstanding'];

    return controls;
  }

  makeFormData(controls: string[]) {
    const formData = new FormData();
    formData.append('case_id', this.caseId ? this.caseId.toString() : '');
    if (!!this.financeData) {
      formData.append('id', this.financeData.id.toString());
    }

    controls.forEach((key) => {
      const control: any = this.financeForm.get(key);

      if (key === 'loan_doc') {
        if (this.loanDocFile) {
          formData.append('loan_doc', this.loanDocFile);
        }
      } else if (key === 'another_loan_doc') {
        if (this.anotherLoanDocFile) {
          formData.append('another_loan_doc', this.anotherLoanDocFile);
        }
      } else if (key === 'deposit_doc') {
        if (this.depositDocFile) {
          formData.append('deposit_doc', this.depositDocFile);
        }
      } else if (key === 'another_deposit_doc') {
        if (this.anotherDepositDocFile) {
          formData.append('another_deposit_doc', this.anotherDepositDocFile);
        }
      } else {
        formData.append(key, control?.value ?? '');
      }

      // if (key === 'qualification_details') {
      //   formData.append(
      //     'english_test_reason',
      //     !!control?.value ? control?.value : null
      //   );
      // } else if (key === 'dependantsUpload') {
      //   if (this.dependantsUploadFile) {
      //     formData.append('financial_maintenance[]', this.dependantsUploadFile);
      //   }
      // } else if (key === 'ukStudentVisaUpload') {
      //   if (this.ukStudentVisaUploadFile) {
      //     formData.append('visa_document[]', this.ukStudentVisaUploadFile);
      //   }
      // } else if (key === 'additionalVisaUpload') {
      //   if (this.additionalVisaUploadFile) {
      //     formData.append('visa_document2[]', this.additionalVisaUploadFile);
      //   }
      // } else {
      //   let valueToSend;
      //   if (control?.value === 'Yes' || control?.value === true) {
      //     valueToSend = '1';
      //   } else if (control?.value === 'No' || control?.value === false) {
      //     valueToSend = '0';
      //   } else if (
      //     Array.isArray(control?.value) &&
      //     control.value.every((v: any) => typeof v === 'string')
      //   ) {
      //     this.studentForm.value.course_level_in_uk.forEach((level: string) => {
      //       formData.append('course_level_in_uk[]', level);
      //     });
      //   } else {
      //     valueToSend = control?.value ?? '';
      //   }

      //   if (
      //     valueToSend !== null &&
      //     valueToSend !== undefined &&
      //     valueToSend !== ''
      //   ) {
      //     formData.append(key, valueToSend);
      //   }
      // }
    });

    return formData;
  }

  updateFinance(formData: FormData) {
    this.apiClient
      .postForFormData(`finance/update`, formData)
      .toPromise()
      .then((resp: any) => {
        if (resp.status) {
          this.toastr.success(resp.message, 'Success');
        } else {
          this.toastr.error(resp.message, 'Error');
        }
      })
      .catch((error: any) => {})
      .catch((error: any) => {});
  }
  addFinance(formData: FormData) {
    this.apiClient
      .postForFormData(`finance/insert`, formData)
      .toPromise()
      .then((resp: any) => {
        if (resp.status) {
          this.isEdit = true;
          this.toastr.success(resp.message, 'Success');
        } else {
          this.toastr.error(resp.message, 'Error');
        }
      })
      .catch((error: any) => {})
      .catch((error: any) => {});
  }

  getFinanceData() {
    this.apiClient
      .get(`finance/single/?case_id=${this.caseId}`)
      .toPromise()
      .then((resp: any) => {
        if (resp.status) {
          this.isEdit = true;
          this.financeData = resp.result;
          this.patchData(this.financeData!);
        }
      })
      .catch((error: any) => {})
      .catch((error: any) => {});
  }
}
