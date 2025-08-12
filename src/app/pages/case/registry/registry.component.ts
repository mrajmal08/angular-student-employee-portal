import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Registry } from 'shared/models/registery-model';
import { ApiClientService } from 'shared/services/api-client.service';
import { AppService } from 'shared/services/app-service.service';

@Component({
  selector: 'app-registry',
  templateUrl: './registry.component.html',
  styleUrls: ['./registry.component.scss'],
})
export class RegistryComponent implements OnInit {
  WithdrawScreenshotUploadFile: File | null = null;
  AttendanceMonitoringPlanUploadFile: File | null = null;
  FitnessToStudyPlanUploadFile: File | null = null;
  PregnancyEvidenceUploadFile: File | null = null;
  DisabilityUploadFile: File | null = null;
  RiskAssessmentUploadFile: File | null = null;
  TransferOfCourseUploadFile: File | null = null;

  currentStatuses: any[] = [
    { id: 1, name: 'Current' },
    { id: 2, name: 'Break in study' },
    { id: 3, name: 'Student withdrawn' },
    { id: 4, name: 'Attendance monitoring plan' },
    { id: 5, name: 'Fitness to study plan' },
    { id: 6, name: 'Pregnancy evidence' },
    { id: 7, name: 'Disability' },
    { id: 8, name: 'Risk assessment' },
  ];

  breakInStudyDropDownItems: any[] = [
    { id: 1, name: 'Return date' },
    { id: 2, name: 'SMS reporting' },
    { id: 3, name: 'Date' },
  ];

  studentWithdrawnItems: any[] = [
    { id: 1, name: 'SMS Reporting' },
    { id: 2, name: 'Date' },
    { id: 3, name: 'Screenshot of SMS' },
  ];

  smsReporting: any[] = [
    { id: 1, name: 'Change of circumstances' },
    { id: 2, name: 'Withdrawal' },
    { id: 3, name: 'No show' },
    { id: 4, name: 'Did not enrol' },
    { id: 5, name: 'Refusal' },
    { id: 6, name: 'Student given a lower award' },
    { id: 7, name: 'Student delayed' },
    { id: 8, name: 'Course change' },
    { id: 9, name: 'Leave of absence' },
  ];

  // for Break in study
  isBreakInStudyDropDownItems: boolean = false;
  isBreakReturnDate: boolean = false;
  isBreakSmsReporting: boolean = false;
  isBreakSmsDate: boolean = false;

  // for Student withdrawn
  isStudentWithdrawnItems: boolean = false;
  isWithdrawnSMSReporting: boolean = false;
  isWithdrawDate: boolean = false;
  isWithdrawScreenShot: boolean = false;

  // for Attendance monitoring plan
  isAttendanceMonitoringPlan: boolean = false;
  isFitnessToStudyPlan: boolean = false;
  isPregnancyEvidencePlan: boolean = false;
  isDisabilityPlan: boolean = false;
  isRiskAssessmentPlan: boolean = false;

  registryForm!: FormGroup;

  studentId: number | null = null;
  caseId: number | null = null;

  registry: Registry | null = null;
  isEdit: boolean = false;

  constructor(
    private fb: FormBuilder,
    private appService: AppService,
    private apiClient: ApiClientService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.appService.breadCrumbData$.subscribe((data) => {
      this.studentId = data.studentId ?? null;
      this.caseId = data.caseId ?? null;

      this.getRegistry();
    });

    this.registryForm = this.fb.group({
      student_status: [null],
      break_in_study: [null],
      break_return_date: [null],
      break_sms_reporting: [null],
      break_sms_date: [null],

      student_withdrawn: [null],
      withdraw_sms_reporting: [null],
      withdraw_date: [null],
      withdraw_screenshot: [null], //  withdraw_screenshot[]

      // for files...
      attendance_monitoring_plan: [null],
      fitness_to_study_plan: [null],
      pregnancy_evidence: [null],
      disability: [null],
      // risk_assessment: [null],
      risk_assessment: [null],
      transfer_of_course: [null],

      sms_reporting_attachments: this.fb.array([]), // sms_reporting_attachments[]

      sms_reporting_reasons: [null],

      personal_tutor: [null],
      notes: [null],

      course_submission_date: [null],
      resubmission_date: [null],
      chaser_date: [null],

      new_visa_required: [null],

      eligible_for: [null],
      date_of_award: [null],
      sms_intake: [null],
      sms_reporting: [null],
      student_notified: [null],
    });
  }

  onStudentStatusChange(selected: any) {
    this.registryForm.get('student_withdrawn')?.setValue(null);
    this.registryForm.get('break_in_study')?.setValue(null);
    this.clearBreakInStudies();
    this.clearStudentWithdrawn();
    this.clearAllFiles();
    this.isBreakInStudyDropDownItems = false;
    this.isBreakReturnDate = false;
    this.isBreakSmsReporting = false;
    this.isBreakSmsDate = false;

    this.isStudentWithdrawnItems = false;
    this.isWithdrawnSMSReporting = false;
    this.isWithdrawDate = false;
    this.isWithdrawScreenShot = false;

    this.isAttendanceMonitoringPlan = false;
    this.isFitnessToStudyPlan = false;
    this.isPregnancyEvidencePlan = false;
    this.isDisabilityPlan = false;
    this.isRiskAssessmentPlan = false;

    console.log('Selected role:', selected);
    if (selected.id === 2) {
      this.isBreakInStudyDropDownItems = true;
    } else if (selected.id === 3) {
      this.isStudentWithdrawnItems = true;
    } else if (selected.id === 4) {
      this.isAttendanceMonitoringPlan = true;
    } else if (selected.id === 5) {
      this.isFitnessToStudyPlan = true;
    } else if (selected.id === 6) {
      this.isPregnancyEvidencePlan = true;
    } else if (selected.id === 7) {
      this.isDisabilityPlan = true;
    } else if (selected.id === 8) {
      this.isRiskAssessmentPlan = true;
    }
  }

  clearAllFiles() {
    this.registryForm.get('withdraw_screenshot')?.setValue(null);
    this.registryForm.get('attendance_monitoring_plan')?.setValue(null);
    this.registryForm.get('fitness_to_study_plan')?.setValue(null);
    this.registryForm.get('pregnancy_evidence')?.setValue(null);
    this.registryForm.get('disability')?.setValue(null);
    this.registryForm.get('risk_assessment')?.setValue(null);
    // const riskAssessmentArray = this.registryForm.get(
    //   'risk_assessment'
    // ) as FormArray;
    // while (riskAssessmentArray.length) {
    //   riskAssessmentArray.removeAt(0);
    // }
  }

  onSMSReportingChange(selectedItems: any[]) {
    const selectedNames = selectedItems.map((item) => item.name);

    this.registryForm.get('sms_reporting_reasons')?.setValue(selectedNames);
    console.log('Selected Names:', selectedNames);
  }

  onBreakInStudySmsReportingChange(value: 'yes' | 'no') {
    const current = this.registryForm.get('break_sms_reporting')?.value;
    // toggle behavior: uncheck if same is clicked again
    if (current === value) {
      this.registryForm.get('break_sms_reporting')?.setValue('');
    } else {
      this.registryForm.get('break_sms_reporting')?.setValue(value);
    }
  }

  onNewViseRequiredChange(value: 'yes' | 'no') {
    const current = this.registryForm.get('new_visa_required')?.value;
    // toggle behavior: uncheck if same is clicked again
    if (current === value) {
      this.registryForm.get('new_visa_required')?.setValue('');
    } else {
      this.registryForm.get('new_visa_required')?.setValue(value);
    }
  }

  onsmsReportingChange(value: 'yes' | 'no') {
    const current = this.registryForm.get('sms_reporting')?.value;
    // toggle behavior: uncheck if same is clicked again
    if (current === value) {
      this.registryForm.get('sms_reporting')?.setValue('');
    } else {
      this.registryForm.get('sms_reporting')?.setValue(value);
    }
  }

  onStudentNotifiedChange(value: 'yes' | 'no') {
    const current = this.registryForm.get('student_notified')?.value;
    // toggle behavior: uncheck if same is clicked again
    if (current === value) {
      this.registryForm.get('student_notified')?.setValue('');
    } else {
      this.registryForm.get('student_notified')?.setValue(value);
    }
  }

  onStudentWithdrawSmsReportingChange(value: 'yes' | 'no') {
    const current = this.registryForm.get('withdraw_sms_reporting')?.value;
    // toggle behavior: uncheck if same is clicked again
    if (current === value) {
      this.registryForm.get('withdraw_sms_reporting')?.setValue('');
    } else {
      this.registryForm.get('withdraw_sms_reporting')?.setValue(value);
    }
  }

  onBreakinStudyChange(selected: any) {
    this.clearBreakInStudies();
    if (selected.id === 1) {
      this.isBreakReturnDate = true;
      this.isBreakSmsReporting = false;
      this.isBreakSmsDate = false;
    } else if (selected.id === 2) {
      this.isBreakSmsReporting = true;
      this.isBreakSmsDate = false;
      this.isBreakReturnDate = false;
    } else if (selected.id === 3) {
      this.isBreakSmsDate = true;
      this.isBreakReturnDate = false;
      this.isBreakSmsReporting = false;
    }
  }

  clearBreakInStudies() {
    this.registryForm.get('break_return_date')?.setValue(null);
    this.registryForm.get('break_sms_reporting')?.setValue(null);
    this.registryForm.get('break_sms_date')?.setValue(null);
  }

  onStudentWithdrawChange(selected: any) {
    this.clearStudentWithdrawn();
    if (selected.id === 1) {
      this.isWithdrawnSMSReporting = true;
      this.isWithdrawDate = false;
      this.isWithdrawScreenShot = false;
    } else if (selected.id === 2) {
      this.isWithdrawDate = true;
      this.isWithdrawnSMSReporting = false;
      this.isWithdrawScreenShot = false;
    } else if (selected.id === 3) {
      this.isWithdrawScreenShot = true;
      this.isWithdrawnSMSReporting = false;
      this.isWithdrawDate = false;
    }
  }

  clearStudentWithdrawn() {
    this.registryForm.get('withdraw_sms_reporting')?.setValue(null);
    this.registryForm.get('withdraw_date')?.setValue(null);
    this.registryForm.get('withdraw_screenshot')?.setValue(null);
  }

  onWithdrawScreenshotUploadFile(event: any) {
    this.WithdrawScreenshotUploadFile = event.target.files[0];
  }

  onAttendanceMonitoringPlanUploadFile(event: any) {
    this.AttendanceMonitoringPlanUploadFile = event.target.files[0];
  }
  onFitnessToStudyPlanUploadFile(event: any) {
    this.FitnessToStudyPlanUploadFile = event.target.files[0];
  }
  onPregnancyEvidenceUploadFile(event: any) {
    this.PregnancyEvidenceUploadFile = event.target.files[0];
  }
  onDisabilityUploadFile(event: any) {
    this.DisabilityUploadFile = event.target.files[0];
  }
  onRiskAssessmentUploadFile(event: any) {
    // this.RiskAssessmentUploadFile = event.target.files[0];

    const input = event.target as HTMLInputElement;
    const files = input.files;

    if (files && files.length > 0) {
      // Clear existing files if needed (optional)
      // this.riskAssessmentFiles.clear();

      // Add new files to FormArray
      for (let i = 0; i < files.length; i++) {
        this.smsReportingAttachmentsFiles.push(this.fb.control(files[i]));
      }
    }

    // Optional: Reset the input to allow re-uploading the same files
    input.value = '';
  }

  removeFile(index: number) {
    this.smsReportingAttachmentsFiles.removeAt(index);
  }

  get smsReportingAttachmentsFiles() {
    return this.registryForm.get('sms_reporting_attachments') as FormArray;
  }
  onTransferOfCourseUploadFile(event: any) {
    this.TransferOfCourseUploadFile = event.target.files[0];
  }

  onSubmit() {
    let formData: any;
    const registryDetails: any = this.getRegistryDetails();
    formData = this.makeFormData(registryDetails);
    if (!this.isEdit) {
      this.addRegistry(formData);
    } else {
      this.updateRegistry(formData);
    }
  }

  onAcademicCalendarDatesSubmit() {
    let formData: any;
    const academicCalendarDetails: any = this.getAcademicCalendarDates();
    formData = this.makeFormData(academicCalendarDetails);
    if (!this.isEdit) {
      this.addRegistry(formData);
    } else {
      this.updateRegistry(formData);
    }
  }

  onSMSReportingSubmit() {
    let formData: any;
    const smsReporting: any = this.getSMSReporting();
    formData = this.makeFormData(smsReporting);
    if (!this.isEdit) {
      this.addRegistry(formData);
    } else {
      this.updateRegistry(formData);
    }
  }

  addRegistry(formData: FormData) {
    this.apiClient
      .postForFormData(`registry/insert`, formData)
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

  updateRegistry(formData: FormData) {
    this.apiClient
      .postForFormData(`registry/update`, formData)
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

  getRegistry() {
    this.apiClient
      .get(`registry/view/${this.caseId}`, {})
      .subscribe((resp: any) => {
        if (resp.status) {
          this.isEdit = true;
          this.registry = resp.result[0];
          this.patchData(this.registry);
        }
      });
  }

  patchData(data: Registry | null) {
    let rawValue: any = data?.sms_reporting_reasons;

    // Step 1: Remove extra quotes and split into array
    const reasonArray = rawValue.replace(/^"|"$/g, '').split(',');

    // Step 2: If your ng-select uses "name" for selection, set directly:
    this.registryForm.get('sms_reporting_reasons')?.setValue(reasonArray);

    if (data?.break_in_study === 'yes') {
      this.isBreakInStudyDropDownItems = true;
      if (!this.isValueNull(data?.break_sms_reporting)) {
        this.isBreakSmsReporting = true;
      } else if (!this.isValueNull(data?.break_return_date)) {
        this.isBreakReturnDate = true;
      } else if (!this.isValueNull(data?.break_sms_date)) {
        this.isBreakSmsDate = true;
      }
    } else if (data?.student_withdrawn === 'yes') {
      this.isStudentWithdrawnItems = true;
      if (!this.isValueNull(data?.withdraw_sms_reporting)) {
        this.isWithdrawnSMSReporting = true;
      } else if (!this.isValueNull(data?.withdraw_date)) {
        this.isWithdrawDate = true;
      } else if (!this.isValueNull(data?.withdraw_screenshot)) {
        this.isWithdrawScreenShot = true;
      }
    } else {
      if (!this.isValueNull(data?.attendance_monitoring_plan)) {
        this.isAttendanceMonitoringPlan = true;
      } else if (!this.isValueNull(data?.fitness_to_study_plan)) {
        this.isFitnessToStudyPlan = true;
      } else if (!this.isValueNull(data?.pregnancy_evidence)) {
        this.isPregnancyEvidencePlan = true;
      } else if (!this.isValueNull(data?.disability)) {
        this.isDisabilityPlan = true;
      } else if (!this.isValueNull(data?.risk_assessment)) {
        this.isRiskAssessmentPlan = true;
      }
    }
    this.registryForm.patchValue({
      student_status:
        data?.break_in_study === 'yes'
          ? 2
          : data?.student_withdrawn === 'yes'
          ? 3
          : !this.isValueNull(data?.attendance_monitoring_plan)
          ? 4
          : !this.isValueNull(data?.fitness_to_study_plan)
          ? 5
          : !this.isValueNull(data?.pregnancy_evidence)
          ? 6
          : !this.isValueNull(data?.disability)
          ? 7
          : !this.isValueNull(data?.risk_assessment)
          ? 8
          : null,

      break_in_study:
        data?.break_in_study === 'yes'
          ? data?.break_sms_reporting === 'yes' ||
            data?.break_sms_reporting === 'no'
            ? 2
            : !!data?.break_return_date
            ? 1
            : 3
          : null,
      break_sms_reporting: data?.break_sms_reporting,

      break_sms_date: data?.break_sms_date,
      break_return_date: data?.break_return_date,

      student_withdrawn:
        data?.student_withdrawn === 'yes'
          ? data?.withdraw_sms_reporting === 'yes' ||
            data?.withdraw_sms_reporting === 'no'
            ? 1
            : !!data?.withdraw_date
            ? 2
            : 3
          : null,

      withdraw_sms_reporting: data?.withdraw_sms_reporting,
      withdraw_date: data?.withdraw_date,

      course_submission_date: data?.course_submission_date,
      resubmission_date: data?.resubmission_date,
      chaser_date: data?.chaser_date,
      eligible_for: data?.eligible_for,
      date_of_award: data?.date_of_award,
      new_visa_required: data?.new_visa_required,
      sms_reporting: data?.sms_reporting,
      student_notified: data?.student_notified,

      personal_tutor: data?.personal_tutor,
      notes: data?.notes,
    });
  }

  isValueNull(value: any): boolean {
    // If it's actually null or undefined
    if (value === null || value === undefined) {
      return true;
    }

    // If it's a string, trim spaces and remove quotes
    if (typeof value === 'string') {
      const cleaned = value
        .trim()
        .replace(/^"+|"+$/g, '')
        .toLowerCase();
      return cleaned === 'null' || cleaned === '';
    }

    return false;
  }

  getRegistryDetails() {
    const controls = [
      'student_status',
      'break_in_study',
      'break_return_date',
      'break_sms_reporting',
      'break_sms_date',
      'student_withdrawn',

      'withdraw_sms_reporting',
      'withdraw_date',
      'withdraw_screenshot',
      'attendance_monitoring_plan',
      'fitness_to_study_plan',
      'pregnancy_evidence',
      'disability',
      'risk_assessment',
      'transfer_of_course',
    ];

    return controls;
  }

  getAcademicCalendarDates() {
    const controls = [
      'course_submission_date',
      'resubmission_date',
      'chaser_date',
      'eligible_for',
      'date_of_award',
      'new_visa_required',

      'sms_reporting',
      'student_notified',
    ];

    return controls;
  }

  getSMSReporting() {
    const controls = [
      'sms_reporting_reasons',
      'personal_tutor',
      'notes',
      'sms_reporting_attachments',
    ];

    return controls;
  }

  makeFormData(controls: string[]) {
    const formData = new FormData();
    formData.append(
      'student_id',
      this.studentId ? this.studentId.toString() : ''
    );
    formData.append('case_id', this.caseId ? this.caseId.toString() : '');

    if (this.isEdit) {
      formData.append(
        'id',
        this.registry?.id ? this.registry.id.toString() : ''
      );
    }
    controls.forEach((key) => {
      const control: any = this.registryForm.get(key);

      if (key === 'student_status') {
        if (!!control?.value) {
          formData.append('student_status', 'yes');
        } else {
          formData.append('student_status', 'no');
        }
      } else if (key === 'break_in_study') {
        if (!!control?.value) {
          formData.append('break_in_study', 'yes');
        } else {
          formData.append('break_in_study', 'no');
        }
      } else if (key === 'student_withdrawn') {
        if (!!control?.value) {
          formData.append('student_withdrawn', 'yes');
        } else {
          formData.append('student_withdrawn', 'no');
        }
      } else {
        let valueToSend;
        valueToSend = control?.value ?? '';

        if (
          valueToSend === undefined ||
          valueToSend === '' ||
          valueToSend === null
        ) {
          valueToSend = 'null'; // as string because FormData stores strings
        }

        formData.append(key, valueToSend);
      }
    });

    return formData;
  }
}
