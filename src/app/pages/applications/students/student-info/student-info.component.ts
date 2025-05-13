import { Component, HostListener, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { debounceTime, distinctUntilChanged, Subject, switchMap } from 'rxjs';
import { ApiClientService } from 'shared/services/api-client.service';
import { Course } from 'shared/models/course-model';
import { Student } from 'shared/models/student-model';

@Component({
  selector: 'app-student-info',
  templateUrl: './student-info.component.html',
  styleUrls: ['./student-info.component.scss'],
})
export class StudentInfoComponent implements OnInit {
  studentForm!: FormGroup;
  displayValidation = true; // Add this property

  showingForm: boolean = false;
  showingFullForm: boolean = false;
  studentId: string | null = null;

  constructor(
    private fb: FormBuilder,
    private location: Location,
    private apiClient: ApiClientService
  ) {
    this.getStudents();
  }

  students: Student[] = [];

  getStudents() {
    this.apiClient.get('students', {}).subscribe((resp: any) => {
      this.students = resp.result.map((course: any) => ({
        id: course.id,
        name: course.name,
        ...course,
      }));
    });
  }

  onStudentChange(event: any) {
    this.studentId = event.id;
    this.showingForm = true;
    this.showingFullForm = true;
    this.patchData(event);
  }

  patchData(data: Student) {
    this.studentForm.patchValue({
      name: data.name,
      surname: data.surname,
      date_of_birth: data.date_of_birth,
      gender: data.gender,
      county: data.county,
      nationality: data.nationality,
      passport_start_date: data.passport_start_date,
      passport_expiry_date: data.passport_expiry_date,
      passport_status: data.passport_status,
      email: data.email,
      phone_no: data.phone_no,
    });
  }
  resetData() {
    this.studentForm.reset();
  }

  ngOnInit(): void {
    this.studentForm = this.fb.group({
      name: ['', Validators.required],
      surname: ['', Validators.required],
      date_of_birth: ['', Validators.required],
      gender: ['', Validators.required],
      county: [''],
      nationality: [''],
      email: ['', Validators.required],
      phone_no: ['', Validators.required],
      passport_start_date: [''],
      passport_expiry_date: [''],
      passport_status: [''],

      // englishTest: ['', Validators.required],
      englishTest: [''],
      englishQualification: [{ value: '', disabled: true }],
      englishExemptionReason: [{ value: '', disabled: true }],
      lastCourseCompleted: [{ value: '', disabled: true }],
      courseCompletionYear: [{ value: '', disabled: true }],

      // courseCompletionYear: [
      //   { value: '', disabled: true },
      //   [Validators.min(1900), Validators.max(2099)],
      // ],

      travellingWithDependants: [''],
      numberOfDependants: [{ value: null, disabled: true }],
      additionalVisaUpload: [null],
      dependantFinancialApproval: [''],
      complianceFlag: [{ value: '', disabled: true }],
      travelOutsideHomeCountry: [''],
      travelFrequency: [{ value: '', disabled: true }],
      ukTravelHistory: [''],
      ukTravelFrequency: [{ value: '', disabled: true }],
      ukStudentVisa: [{ value: '', disabled: true }],
      ukStudentVisaUpload: [{ value: null, disabled: true }],
      ukVisaRefusal: [''],
      courseLevelComparison: [''],

      previousUkStudy: [''],
    });

    this.studentForm.get('englishTest')?.valueChanges.subscribe((value) => {
      if (value === 'No') {
        this.studentForm.get('englishExemptionReason')?.enable();
        this.studentForm.get('englishQualification')?.enable();
        this.studentForm.get('lastCourseCompleted')?.enable();
        this.studentForm.get('courseCompletionYear')?.enable();
      } else {
        this.studentForm.get('englishExemptionReason')?.disable();
        this.studentForm.get('englishQualification')?.disable();
        this.studentForm.get('lastCourseCompleted')?.disable();
        this.studentForm.get('courseCompletionYear')?.disable();
      }
    });

    // Handle Dependants Logic
    this.studentForm
      .get('travellingWithDependants')
      ?.valueChanges.subscribe((value) => {
        if (value === 'Yes') {
          this.studentForm.get('numberOfDependants')?.enable();
        } else {
          this.studentForm.get('numberOfDependants')?.disable();
        }
      });

    // Handle Financial Approval Logic
    this.studentForm
      .get('dependantFinancialApproval')
      ?.valueChanges.subscribe((value) => {
        if (value === 'No') {
          this.studentForm.get('complianceFlag')?.enable();
        } else {
          this.studentForm.get('complianceFlag')?.disable();
        }
      });

    // Handle Travel Outside Home Country Logic
    this.studentForm
      .get('travelOutsideHomeCountry')
      ?.valueChanges.subscribe((value) => {
        if (value === 'Yes') {
          this.studentForm.get('travelFrequency')?.enable();
        } else {
          this.studentForm.get('travelFrequency')?.disable();
        }
      });

    // Handle UK Travel History Logic
    this.studentForm.get('ukTravelHistory')?.valueChanges.subscribe((value) => {
      if (value === 'Yes') {
        this.studentForm.get('ukTravelFrequency')?.enable();
      } else {
        this.studentForm.get('ukTravelFrequency')?.disable();
      }
    });

    // Handle Previous UK Study Logic
    this.studentForm.get('previousUkStudy')?.valueChanges.subscribe((value) => {
      if (value === 'Yes') {
        this.studentForm.get('ukStudentVisa')?.enable();
      } else {
        this.studentForm.get('ukStudentVisa')?.disable();
      }
    });

    // Handle UK Student Visa Upload Logic
    this.studentForm.get('ukStudentVisa')?.valueChanges.subscribe((value) => {
      if (value === 'Yes') {
        this.studentForm.get('ukStudentVisaUpload')?.enable();
      } else {
        this.studentForm.get('ukStudentVisaUpload')?.disable();
      }
    });
  }

  onSubmit() {
    if (!this.studentId) {
      this.addStudent();
    }
    // let formData = this.getFormData();

    // formData.forEach((value, key) => {
    //   console.log('Key,Value Here', key, value);
    // });

    // if (this.studentForm.valid) {
    // if (!!this.dataForEdit.row) {
    //   const queryParams = new URLSearchParams({
    //     id: this.dataForEdit.row.id,
    //     ...this.studentForm.value,
    //   }).toString();
    //   this.apiClient
    //     .post(`student/update?${queryParams}`)
    //     .subscribe((resp: any) => {
    //       if (resp.status) {
    //         this.location.back();
    //       } else {
    //       }
    //     });
    // } else {
    //     const queryParams = new URLSearchParams({
    //       ...this.studentForm.value,
    //     }).toString();
    //     this.apiClient
    //       .post(`student/insert?${queryParams}`)
    //       .toPromise()
    //       .then((resp: any) => {
    //         if (resp.status) {
    //           this.location.back();
    //         }
    //       })
    //       .catch((error: any) => {
    //       })
    //       .catch((error: any) => {});
    //   // }
    // } else {
    //   console.log('Form is invalid');
    // }
  }

  addStudent() {
    const {
      name,
      surname,
      email,
      nationality,
      date_of_birth,
      place_of_birth,
      passport_start_date,
      passport_expiry_date,
      passport_status,
      phone_no,
      gender,
    } = this.studentForm.value;

    const queryParams = new URLSearchParams({
      name,
      surname,
      email,
      nationality,
      date_of_birth,
      place_of_birth,
      passport_start_date,
      passport_expiry_date,
      passport_status,
      phone_no,
      gender,
    }).toString();

    this.apiClient
      .post(`student/insert?${queryParams}`)
      .toPromise()
      .then((resp: any) => {
        if (resp.status) {
          this.studentId = resp.result.id;
          this.showingForm = true;
          this.showingFullForm = true;
        }
      })
      .catch((error: any) => {})
      .catch((error: any) => {});
  }

  getFormData(): FormData {
    // if (type === 'NEW') {
    const requiredKeys = [
      'name',
      'surname',
      'date_of_birth',
      'gender',
      'county',
      'nationality',
      'email',
      'phone_no',
      'passport_start_date',
      'passport_expiry_date',
      'passport_status',
    ];

    const formData = new FormData();

    requiredKeys.forEach((key) => {
      const value = this.studentForm.get(key)?.value;
      if (value !== null && value !== undefined) {
        formData.append(key, value);
      }
    });

    return formData;
  }

  closeForm() {
    this.location.back();
  }

  onAddNewStudent() {
    this.studentId = null;
    this.showingForm = true;
    this.showingFullForm = false;
    this.resetData();
  }
}
