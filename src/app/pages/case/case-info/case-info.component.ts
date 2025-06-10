import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Course } from 'shared/models/course-model';
import { Session } from 'shared/models/session-model';
import { User } from 'shared/models/user-model';
import { ApiClientService } from 'shared/services/api-client.service';
import { Location } from '@angular/common';
import { AppService } from 'shared/services/app-service.service';

@Component({
  selector: 'app-case-info',
  templateUrl: './case-info.component.html',
  styleUrls: ['./case-info.component.scss'],
})
export class CaseInfoComponent implements OnInit {
  @ViewChild('agentSelect', { read: ElementRef }) agentSelectRef!: ElementRef;
  @ViewChild('sessionSelect', { read: ElementRef })
  sessionSelectRef!: ElementRef;
  @ViewChild('courseSelect', { read: ElementRef })
  courseSelectRef!: ElementRef;

  caseForm!: FormGroup;
  displayValidation = true;
  userId: string | null = '';
  caseId: number | null = null;
  studentId: number | null = null;
  dataForEdit: any;

  courses: Course[] = [];
  sessions: Session[] = [];
  agents: User[] = [];

  selectedCourses: number[] = [];

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private apiClient: ApiClientService,
    private location: Location,
    private route: ActivatedRoute,
    private appService: AppService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.userId = params.get('id');
      console.log(this.userId);
    });

    this.caseForm = this.fb.group({
      course_id: ['', Validators.required],
      session_id: ['', Validators.required],
      agent_id: ['', Validators.required],
    });

    this.dataForEdit = history.state;
    console.log('dataForEdit', this.dataForEdit);

    if (!!this.dataForEdit.row) {
      this.caseForm.patchValue({
        course_id: this.dataForEdit.row.course_id,
        session_id: this.dataForEdit.row.session_id,
        agent_id: this.dataForEdit.row.agent_id,
      });
    } else {
      this.appService.breadCrumbData$.subscribe((data) => {
        this.caseId = data.caseId ?? null;
        this.studentId = data.studentId ?? null;
        if (!!this.caseId && !!this.studentId) {
          this.apiClient
            .get(`case/single/${this.studentId}`, {})
            .subscribe((resp: any) => {
              if (resp.status) {
                this.dataForEdit.row = resp.result[0];
                this.caseForm.patchValue({
                  course_id: this.dataForEdit.row.course_id,
                  session_id: this.dataForEdit.row.session_id,
                  agent_id: this.dataForEdit.row.agent_id,
                });
              }
            });
        }
      });
    }

    this.getCourses();
    this.getSessions();
    this.getAgents();
  }

  onFileChange(event: any, field: string) {
    if (event.target.files.length > 0) {
      this.caseForm.patchValue({ [field]: event.target.files[0] });
    }
  }

  onSubmit() {
    // this.navigateToNext();

    if (this.caseForm.valid) {
      if (!!this.dataForEdit.row) {
        const queryParams = new URLSearchParams({
          case_id: this.dataForEdit.row.id,
          ...(this.dataForEdit.row.student_id
            ? { student_id: this.dataForEdit.row.student_id }
            : {}),
          ...this.caseForm.value,
        }).toString();
        this.apiClient
          .get(`case/update?${queryParams}`)
          .subscribe((resp: any) => {
            if (resp.status) {
              this.appService.updateBreadCrumbData({
                caseId: this.dataForEdit.row.id,
              });
              this.navigateToNext();
            } else {
            }
          });
      } else {
        const queryParams = new URLSearchParams({
          ...this.caseForm.value,
        }).toString();
        this.apiClient
          .post(`case/insert?${queryParams}`)
          .toPromise()
          .then((resp: any) => {
            if (resp.status) {
              this.appService.updateBreadCrumbData({
                caseId: resp.result.id,
              });
              this.navigateToNext();
            }
          })
          .catch((error: any) => {})
          .catch((error: any) => {});
      }
    } else {
    }
  }

  navigateToNext() {
    let url = '/case/';
    url += this.userId ? 'edit' : 'add';
    this.router.navigateByUrl(url + '/student-info');
  }

  closeForm() {
    this.location.back();
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

  onAgentChange($event: any) {
    setTimeout(() => {
      const input: HTMLInputElement | null =
        this.agentSelectRef.nativeElement.querySelector('input');
      if (input) {
        input.blur();
      }
    }, 10);
  }

  onSessionChange($event: any) {
    setTimeout(() => {
      const input: HTMLInputElement | null =
        this.sessionSelectRef.nativeElement.querySelector('input');
      if (input) {
        input.blur();
      }
    }, 10);
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
}
