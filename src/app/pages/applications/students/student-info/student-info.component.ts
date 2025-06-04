import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiClientService } from 'shared/services/api-client.service';
import { Student } from 'shared/models/student-model';
import { AppService } from 'shared/services/app-service.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AddStudentDialogComponent } from '../add-student-dialog/add-student-dialog.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student-info',
  templateUrl: './student-info.component.html',
  styleUrls: ['./student-info.component.scss'],
})
export class StudentInfoComponent implements OnInit {
  studentForm!: FormGroup;
  displayValidation = true; // Add this property

  showingFullForm: boolean = false;
  studentId: number | null = null;
  caseId: number | null = null;

  selectedStudentId: number | null = null;
  selectedStudent: Student | null = null;

  additionalVisaUploadFile: File | null = null;
  ukStudentVisaUploadFile: File | null = null;
  dependantsUploadFile: File | null = null;

  constructor(
    private fb: FormBuilder,
    private location: Location,
    private apiClient: ApiClientService,
    private appService: AppService,
    private modalService: NgbModal,
    private router: Router
  ) {
    this.getStudents();
  }

  students: Student[] = [];

  onPrevious() {
    this.location.back();
  }

  onNext() {
    let url = '/case/add';
    this.router.navigateByUrl(url + '/creditability-interview');
  }

  getStudents() {
    this.apiClient.get('students', {}).subscribe((resp: any) => {
      this.students = resp.result.map((student: any) => ({
        id: student.id,
        name: student.name,
        ...student,
      }));

      if (!!this.studentId) {
        let student: any = this.students.find(
          (student) => student.id === this.studentId
        );
        this.onStudentChange(student);
        this.studentForm.get('studentId')?.setValue(this.studentId);
        const parsedLevels = JSON.parse(student?.course_level_in_uk || '[]');
        this.studentForm.get('course_level_in_uk')?.setValue(parsedLevels);
      }
    });
  }

  onStudentChange(event: any) {
    this.studentId = event.id;
    this.selectedStudent = event;
    this.showingFullForm = true;
    this.patchData(event);
  }

  patchData(data: Student) {
    this.studentForm.patchValue({
      name: data.name,
      surname: data.surname,
      date_of_birth: data.date_of_birth,
      gender: data.gender,
      place_of_birth: data.place_of_birth,
      nationality: data.nationality,
      passport_start_date: data.passport_start_date,
      passport_expiry_date: data.passport_expiry_date,
      passport_status: data.passport_status,
      email: data.email,
      phone_no: data.phone_no,

      //  English Info...
      english_test:
        data.english_test !== null
          ? data.english_test === 1
            ? 'Yes'
            : 'No'
          : null,
      english_test_reason:
        data.english_test_reason !== null ? data.english_test_reason : null,
      qualification_details:
        data.english_test_reason !== null &&
        data.english_test_reason !== 'null' &&
        data.english_test_reason !== 'qualification' &&
        data.english_test_reason !== 'previousVisa' &&
        data.english_test_reason !== 'studyProgramme' &&
        data.english_test_reason !== 'giftedStudent' &&
        data.english_test_reason !== 'institutionAssessment' &&
        data.english_test_reason !== 'other'
          ? data.english_test_reason ?? null
          : null,
      last_course: data.last_course !== null ? data.last_course : null,
      last_course_completion_year:
        data.last_course_completion_year !== null
          ? data.last_course_completion_year
          : null,

      // Dependants Info...

      dependant:
        data.dependant !== null ? (data.dependant === 1 ? 'Yes' : 'No') : null,
      dependant_no: data.dependant_no !== null ? data.dependant_no : null,
      dependant_financial_info:
        data.dependant_financial_info !== null
          ? data.dependant_financial_info === 1
            ? 'Yes'
            : 'No'
          : null,
      flag_for_compliance:
        data.flag_for_compliance !== null
          ? data.flag_for_compliance === 1
          : null,
      travel_outside:
        data.travel_outside !== null
          ? data.travel_outside === 1
            ? 'Yes'
            : 'No'
          : null,
      travel_outside_no:
        data.travel_outside_no !== null ? data.travel_outside_no : null,
      travel_uk:
        data.travel_uk !== null ? (data.travel_uk === 1 ? 'Yes' : 'No') : null,
      travel_uk_no: data.travel_uk_no !== null ? data.travel_uk_no : null,

      // Visa Info...
      previous_study_uk:
        data.previous_study_uk !== null
          ? data.previous_study_uk === 1
            ? 'Yes'
            : 'No'
          : null,
      receive_student_visa:
        data.receive_student_visa !== null
          ? data.receive_student_visa === 1
            ? 'Yes'
            : 'No'
          : null,
      refusal_from_uk:
        data.refusal_from_uk !== null
          ? data.refusal_from_uk === 1
            ? 'Yes'
            : 'No'
          : null,
      course_level_in_uk: [[]],
    });
  }
  resetData() {
    this.studentForm.reset();
  }

  ngOnInit(): void {
    this.appService.breadCrumbData$.subscribe((data) => {
      this.studentId = data.studentId ?? null;
      this.caseId = data.caseId ?? null;
    });

    this.studentForm = this.fb.group({
      studentId: [''],
      // Student Req Info...
      name: ['', Validators.required],
      surname: ['', Validators.required],
      date_of_birth: ['', Validators.required],
      gender: ['', Validators.required],
      place_of_birth: [''],
      nationality: [''],
      passport_start_date: [''],
      passport_expiry_date: [''],
      passport_status: [''],
      email: ['', Validators.required],
      phone_no: ['', Validators.required],

      // Student Eng Info...(incomplete)
      english_test: [''],
      qualification_details: [''],
      english_test_reason: [{ value: '', disabled: true }],
      englishQualification: [{ value: '', disabled: true }], //  Qualification details missing till now.
      last_course: [{ value: '', disabled: true }],
      last_course_completion_year: [{ value: '', disabled: true }],

      // Student Dependants...
      dependant: [''],
      dependant_no: [{ value: null, disabled: true }],
      dependant_financial_info: [''],
      flag_for_compliance: [{ value: '', disabled: true }],
      travel_outside: [''],
      travel_outside_no: [{ value: '', disabled: true }],
      travel_uk: [''],
      travel_uk_no: [{ value: '', disabled: true }],

      // Student Visa Info...
      previous_study_uk: [''],
      receive_student_visa: [{ value: '', disabled: true }],
      refusal_from_uk: [''],
      course_level_in_uk: [[]],

      courseCompletionYear: [{ value: '', disabled: true }],
      financial_maintenance: [null],
      dependantsUpload: [{ value: '', disabled: true }],
      additionalVisaUpload: [null],
      ukStudentVisaUpload: [{ value: null, disabled: true }],
      courseLevelComparison: [''],
    });

    this.studentForm.get('english_test')?.valueChanges.subscribe((value) => {
      if (value === 'No') {
        this.studentForm.get('english_test_reason')?.enable();
        this.studentForm.get('englishQualification')?.enable();
        this.studentForm.get('last_course')?.enable();
        this.studentForm.get('last_course_completion_year')?.enable();
        this.studentForm.get('courseCompletionYear')?.enable();
        this.studentForm.get('qualification_details')?.enable();
      } else {
        this.studentForm.get('english_test_reason')?.setValue('');
        this.studentForm.get('english_test_reason')?.disable();
        this.studentForm.get('englishQualification')?.setValue('');
        this.studentForm.get('englishQualification')?.disable();
        this.studentForm.get('last_course')?.setValue('');
        this.studentForm.get('last_course')?.disable();
        this.studentForm.get('last_course_completion_year')?.setValue('');
        this.studentForm.get('last_course_completion_year')?.disable();
        this.studentForm.get('courseCompletionYear')?.setValue('');
        this.studentForm.get('courseCompletionYear')?.disable();
        this.studentForm.get('qualification_details')?.setValue('');
        this.studentForm.get('qualification_details')?.disable();
      }
    });

    this.studentForm
      .get('qualification_details')
      ?.valueChanges.subscribe((value) => {
        if (value && value.trim() !== '') {
          this.studentForm.get('english_test_reason')?.setValue('');
        }
      });

    this.studentForm
      .get('english_test_reason')
      ?.valueChanges.subscribe((value) => {
        if (value && value.trim() !== '') {
          this.studentForm.get('qualification_details')?.setValue('');
        }
      });

    // Handle Dependants Logic
    this.studentForm.get('dependant')?.valueChanges.subscribe((value) => {
      if (value === 'Yes') {
        this.studentForm.get('dependant_no')?.enable();
      } else {
        this.studentForm.get('dependant_no')?.setValue('');
        this.studentForm.get('dependant_no')?.disable();
      }
    });

    // Handle Financial Approval Logic
    this.studentForm
      .get('dependant_financial_info')
      ?.valueChanges.subscribe((value) => {
        if (value === 'No') {
          this.studentForm.get('flag_for_compliance')?.enable();
        } else {
          this.studentForm.get('flag_for_compliance')?.setValue('');
          this.studentForm.get('flag_for_compliance')?.disable();
        }
      });

    // Handle Travel Outside Home Country Logic
    this.studentForm.get('travel_outside')?.valueChanges.subscribe((value) => {
      if (value === 'Yes') {
        this.studentForm.get('travel_outside_no')?.enable();
      } else {
        this.studentForm.get('travel_outside_no')?.setValue('');
        this.studentForm.get('travel_outside_no')?.disable();
      }
    });

    // Handle UK Travel History Logic
    this.studentForm.get('travel_uk')?.valueChanges.subscribe((value) => {
      if (value === 'Yes') {
        this.studentForm.get('travel_uk_no')?.enable();
      } else {
        this.studentForm.get('travel_uk_no')?.setValue('');
        this.studentForm.get('travel_uk_no')?.disable();
      }
    });

    // Handle Previous UK Study Logic
    this.studentForm
      .get('previous_study_uk')
      ?.valueChanges.subscribe((value) => {
        if (value === 'Yes') {
          this.studentForm.get('receive_student_visa')?.enable();
        } else {
          this.studentForm.get('receive_student_visa')?.setValue('');
          this.studentForm.get('receive_student_visa')?.disable();
        }
      });

    // Handle UK Student Visa Upload Logic
    this.studentForm
      .get('receive_student_visa')
      ?.valueChanges.subscribe((value) => {
        if (value === 'Yes') {
          this.studentForm.get('ukStudentVisaUpload')?.enable();
        } else {
          this.studentForm.get('ukStudentVisaUpload')?.setValue('');
          this.studentForm.get('ukStudentVisaUpload')?.disable();
        }
      });
  }

  // Store the full descriptive texts
  levelOptions = [
    'The course that I am applying for is at a higher level',
    'The course that I am applying for is at the same level',
    'The course that I am applying for is at a lower level',
    'I have not studied any academic courses in the UK',
  ];

  onSubmit() {}

  onadditionalVisaUploadFile(event: any, controlName: string) {
    this.additionalVisaUploadFile = event.target.files[0];
  }
  onukStudentVisaUploadFile(event: any, controlName: string) {
    this.ukStudentVisaUploadFile = event.target.files[0];
  }
  ondependantsUploadFile(event: any, controlName: string) {
    this.dependantsUploadFile = event.target.files[0];
  }

  makeFormData(controls: string[]) {
    const formData = new FormData();
    formData.append('id', this.studentId ? this.studentId.toString() : '');
    formData.append('case_id', this.caseId ? this.caseId.toString() : '');

    this.appService.updateBreadCrumbData({
      studentId: this.studentId,
      caseId: this.caseId,
    });
    controls.forEach((key) => {
      const control: any = this.studentForm.get(key);

      if (key === 'qualification_details') {
        formData.append(
          'english_test_reason',
          !!control?.value ? control?.value : null
        );
      } else if (key === 'dependantsUpload') {
        if (this.dependantsUploadFile) {
          formData.append('financial_maintenance[]', this.dependantsUploadFile);
        }
      } else if (key === 'ukStudentVisaUpload') {
        if (this.ukStudentVisaUploadFile) {
          formData.append('visa_document[]', this.ukStudentVisaUploadFile);
        }
      } else if (key === 'additionalVisaUpload') {
        if (this.additionalVisaUploadFile) {
          formData.append('visa_document2[]', this.additionalVisaUploadFile);
        }
      } else {
        let valueToSend;
        if (control?.value === 'Yes' || control?.value === true) {
          valueToSend = '1';
        } else if (control?.value === 'No' || control?.value === false) {
          valueToSend = '0';
        } else if (
          Array.isArray(control?.value) &&
          control.value.every((v: any) => typeof v === 'string')
        ) {
          this.studentForm.value.course_level_in_uk.forEach((level: string) => {
            formData.append('course_level_in_uk[]', level);
          });
        } else {
          valueToSend = control?.value ?? '';
        }

        if (
          valueToSend !== null &&
          valueToSend !== undefined &&
          valueToSend !== ''
        ) {
          formData.append(key, valueToSend);
        }
      }
    });

    // for (const [key, value] of (formData as any).entries()) {
    //   console.log(`${key}:`, value);
    // }

    return formData;
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
          this.showingFullForm = true;
        }
      })
      .catch((error: any) => {})
      .catch((error: any) => {});
  }

  updateStudent(formData: FormData) {
    this.apiClient
      .postForFormData(`student/update`, formData)
      .toPromise()
      .then((resp: any) => {
        if (resp.status) {
        }
      })
      .catch((error: any) => {})
      .catch((error: any) => {});
  }

  closeForm() {
    this.location.back();
  }

  onAddNewStudent() {
    this.openAddStudentModel();
  }

  openAddStudentModel() {
    const modelRef = this.modalService.open(AddStudentDialogComponent, {
      size: 'lg',
      centered: true,
      backdrop: 'static',
      windowClass: 'custom-modal',
    });

    modelRef.result.then((result) => {
      if (result) {
        this.getStudents();
        this.studentId = null;
        this.showingFullForm = false;
        this.resetData();
      }
    });
  }

  onStudentEditViewSubmit() {
    let basicInfo: any = this.getStudentRequiredInfo();
    basicInfo.id = this.studentId;
    basicInfo.case_id = this.caseId;
  }

  onStudentEnglistInfoSubmit() {
    const englishInfo: any = this.getStudentEnglishInfo();
    let formData: FormData = this.makeFormData(englishInfo);
    this.updateStudent(formData);
  }

  onStudentDependantsInfoSubmit() {
    const dependantsInfo: any = this.getStudentDepenantsInfo();
    let formData: FormData = this.makeFormData(dependantsInfo);
    this.updateStudent(formData);
  }

  onStudentVisaInfoSubmit() {
    const studentViseInfo: any = this.getStudentVisaInfo();
    let formData: FormData = this.makeFormData(studentViseInfo);
    this.updateStudent(formData);
  }

  getStudentRequiredInfo() {
    const controls = [
      'name',
      'surname',
      'date_of_birth',
      'gender',
      'place_of_birth',
      'nationality',
      'passport_start_date',
      'passport_expiry_date',
      'passport_status',
      'email',
      'phone_no',
    ];

    return controls;
  }

  getStudentEnglishInfo() {
    const controls = [
      'name',
      'surname',
      'date_of_birth',
      'gender',
      'place_of_birth',
      'nationality',
      'passport_start_date',
      'passport_expiry_date',
      'passport_status',
      'email',
      'phone_no',
      'english_test',
      'qualification_details',
      'english_test_reason',
      'last_course',
      'last_course_completion_year',
    ];

    return controls;
  }

  getStudentVisaInfo() {
    const controls = [
      'name',
      'surname',
      'date_of_birth',
      'gender',
      'place_of_birth',
      'nationality',
      'passport_start_date',
      'passport_expiry_date',
      'passport_status',
      'email',
      'phone_no',

      'previous_study_uk',
      'receive_student_visa',
      'refusal_from_uk',
      'course_level_in_uk',

      'ukStudentVisaUpload',
      'additionalVisaUpload',
    ];

    return controls;
  }

  getStudentDepenantsInfo() {
    const controls = [
      'name',
      'surname',
      'date_of_birth',
      'gender',
      'place_of_birth',
      'nationality',
      'passport_start_date',
      'passport_expiry_date',
      'passport_status',
      'email',
      'phone_no',

      'dependant',
      'dependant_no',
      'dependant_financial_info',
      'flag_for_compliance',
      'travel_outside',
      'travel_outside_no',
      'travel_uk',
      'travel_uk_no',
      'dependantsUpload',
    ];

    return controls;
  }

  updateCourseLevels(event: Event, value: string) {
    const checkbox = event.target as HTMLInputElement;
    const levels = this.studentForm.get('course_level_in_uk')?.value || [];

    if (checkbox.checked) {
      this.studentForm
        .get('course_level_in_uk')
        ?.setValue([
          ...(Array.isArray(levels) &&
          levels.every((l) => typeof l === 'string')
            ? levels
            : []),
          value,
        ]);
    } else {
      this.studentForm
        .get('course_level_in_uk')
        ?.setValue(levels.filter((v: string) => v !== value));
    }
  }
}
