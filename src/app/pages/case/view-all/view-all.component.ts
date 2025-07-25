import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Course } from 'shared/models/course-model';
import { Finance } from 'shared/models/finance-model';
import { Interview } from 'shared/models/interview-model';
import { Session } from 'shared/models/session-model';
import { Student } from 'shared/models/student-model';
import { User } from 'shared/models/user-model';
import { ApiClientService } from 'shared/services/api-client.service';
import { AppService } from 'shared/services/app-service.service';

@Component({
  selector: 'app-view-all',
  templateUrl: './view-all.component.html',
  styleUrls: ['./view-all.component.scss'],
})
export class ViewAllComponent implements OnInit {
  caseForm!: FormGroup;
  studentForm!: FormGroup;
  financeForm!: FormGroup;

  showingFullForm: boolean = false;
  caseId: number | null = null;
  studentId: number | null = null;
  selectedStudent: Student | null = null;

  courses: Course[] = [];
  sessions: Session[] = [];
  agents: User[] = [];
  students: Student[] = [];
  rows: Interview[] = [];

  page = {
    perPage: 10,
    page: 1,
    total: 100,
  };

  setPage(pageInfo: any) {
    this.page.page = pageInfo.offset + 1;
  }

  columns = [
    { name: 'Interview ID', prop: 'id' },
    { name: 'Case ID', prop: 'case_id' },
    { name: 'Status Name', prop: 'status.name' },
    { name: 'Created By', prop: 'created_by' },
    { name: 'Updated By', prop: 'updated_by' },
  ];

  displayValidation = true;

  constructor(
    private apiClient: ApiClientService,
    private fb: FormBuilder,
    private appService: AppService
  ) {
    this.getStudents();
  }

  levelOptions = [
    'The course that I am applying for is at a higher level',
    'The course that I am applying for is at the same level',
    'The course that I am applying for is at a lower level',
    'I have not studied any academic courses in the UK',
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

  ngOnInit(): void {
    this.appService.breadCrumbData$.subscribe((data) => {
      this.studentId = data.studentId ?? null;
      this.caseId = data.caseId ?? null;
    });

    this.caseForm = this.fb.group({
      course_id: [''],
      session_id: [''],
      agent_id: [''],
    });

    this.getInterviews();
    this.getCourses();
    this.getSessions();
    this.getAgents();
    this.getSelectedCaseInfo();

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

    this.getFinanceData();

    this.financeForm = this.fb.group({
      course_id: ['', Validators.required],
      course_fees: [''],
      first_year_fees: [''],
      inside_london: [false],
      outside_london: [false],
      living_cost_inside_london: [''],
      living_cost_outside_london: [''],
      total_fund: [{ value: 0, disabled: true }],

      living_cost_plan: this.fb.control<string[]>([]),
      otherSelected: [false],
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

    this.disabledControls();
  }

  getInterviews() {
    this.apiClient
      .get(`interview/view/${this.caseId}`, {})
      .subscribe((resp: any) => {
        this.page.total = resp.result.total;
        this.rows = resp.result.map(
          (row: { created_at: string; updated_at: string }) => ({
            ...row,
          })
        );
        this.page.total = this.rows.length;
      });
  }

  getFinanceData() {
    this.apiClient
      .get(`finance/single/?case_id=${this.caseId}`)
      .toPromise()
      .then((resp: any) => {
        if (resp.status) {
          this.patchFinanceData(resp.result);
        }
      })
      .catch((error: any) => {})
      .catch((error: any) => {});
  }

  patchFinanceData(data: Finance) {
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
      otherSelected:
        data.other !== null && data.other !== 'null' ? true : false,
      other: data.other !== null && data.other !== 'null' ? data.other : '',

      education_loan: data.education_loan,
      another_education_loan: data.another_education_loan,
      fees_deposit: data.fees_deposit,

      another_deposit: data.another_deposit,
      funds_amount_paid: data.funds_amount_paid,
      edu_loan_paid: data.edu_loan_paid,
      fees_outstanding: data.fees_outstanding,
    });
  }

  disabledControls() {
    this.caseForm.get('course_id')?.disable();
    this.caseForm.get('session_id')?.disable();
    this.caseForm.get('agent_id')?.disable();

    this.studentForm.disable();
    this.financeForm.disable();
  }

  getCourses() {
    this.apiClient.get('courses', {}).subscribe((resp: any) => {
      this.courses = resp.result.map((course: any) => ({
        id: course.id,
        name: course.name,
      }));
    });
  }

  getSessions() {
    this.apiClient.get('sessions', {}).subscribe((resp: any) => {
      this.sessions = resp.result.map((session: any) => ({
        id: session.id,
        name: session.name,
      }));
    });
  }

  getAgents() {
    this.apiClient.get('users?role_id=2', {}).subscribe((resp: any) => {
      this.agents = resp.result.map((agent: any) => ({
        id: agent.id,
        name: agent.name,
      }));
    });
  }

  getSelectedCaseInfo() {
    this.apiClient
      .get(`case/view/${this.caseId}`, {})
      .subscribe((resp: any) => {
        this.caseForm.patchValue({
          course_id: resp.result[0].course_id,
          session_id: resp.result[0].session.id,
          agent_id: resp.result[0].agent.id,
        });
      });
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
    console.log('Selected Student:', event);

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

  onAgentChange($event: any) {}

  onSessionChange($event: any) {}

  onCourseChange($event: any) {}
}
