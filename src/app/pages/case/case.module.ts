import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { TabViewModule } from 'primeng/tabview';

import { CaseRoutingModule } from './case-routing.module';
import { CaseComponent } from './case.component';
import { CaseInfoComponent } from './case-info/case-info.component';
import { CaseNavBarComponent } from './case-nav-bar/case-nav-bar.component';
import { PatientInfoComponent } from './patient-info/patient-info.component';
import { DependantsComponent } from './dependants/dependants.component';
import { PreviousInfoComponent } from './previous-info/previous-info.component';
import { ReferrerComponent } from './referrer/referrer.component';
import { DocsComponent } from './docs/docs.component';
import { VerifierComponent } from './verifier/verifier.component';
import { ViewAllComponent } from './view-all/view-all.component';
import { CaseAddComponent } from './case-add/case-add.component';
import { CaseEditComponent } from './case-edit/case-edit.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { NewStudentComponent } from './new-student/new-student.component';
import { ReenrollmentComponent } from './reenrollment/reenrollment.component';
import { CommentsComponent } from './comments/comments.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CasesListComponent } from './cases-list/cases-list.component';
import { CreatedInterviewComponent } from './scheduler/created-interview/created-interview.component';
import { AddTimeSlotComponent } from './add-time-slot/add-time-slot.component';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { AddTimeSlotDialogComponent } from './add-time-slot-dialog/add-time-slot-dialog.component';
import { SchedulerComponent } from './scheduler/scheduler.component';
import { SchedulerInterviewComponent } from './scheduler/scheduler-interview/scheduler-interview.component';
import { AddInterviewerNameDialogComponent } from './add-interviewer-name-dialog/add-interviewer-name-dialog.component';
import { AddSampleQuestionDialogComponent } from './add-sample-question-dialog/add-sample-question-dialog.component';
import { CompletedInterviewComponent } from './scheduler/completed-interview/completed-interview.component';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { ComplianceCreatedInterviewComponent } from './scheduler/compliance-created-interview/compliance-created-interview.component';
import { ComplianceSchedulerInterviewComponent } from './scheduler/compliance-scheduler-interview/compliance-scheduler-interview.component';
import { ComplianceCompletedInterviewComponent } from './scheduler/compliance-completed-interview/compliance-completed-interview.component';
import { AddDocumentDialogComponent } from './docs/add-document-dialog/add-document-dialog.component';

@NgModule({
  declarations: [
    CaseComponent,
    CaseInfoComponent,
    CaseNavBarComponent,
    PatientInfoComponent,
    DependantsComponent,
    PreviousInfoComponent,
    SchedulerComponent,
    CreatedInterviewComponent,
    ComplianceCreatedInterviewComponent,
    SchedulerInterviewComponent,
    ComplianceSchedulerInterviewComponent,
    CompletedInterviewComponent,
    ComplianceCompletedInterviewComponent,
    ReferrerComponent,
    DocsComponent,
    AddDocumentDialogComponent,
    VerifierComponent,
    ViewAllComponent,
    CaseAddComponent,
    CaseEditComponent,
    NewStudentComponent,
    ReenrollmentComponent,
    CommentsComponent,
    CasesListComponent,
    AddTimeSlotComponent,
    AddTimeSlotDialogComponent,
    AddInterviewerNameDialogComponent,
    AddSampleQuestionDialogComponent,
  ],
  imports: [
    CommonModule,
    CaseRoutingModule,
    ReactiveFormsModule,
    NgSelectModule,
    NgxDatatableModule,
    TabViewModule,
    NgbModule,
    CollapseModule.forRoot(),

    // MatFormFieldModule,
    // MatInputModule,
    // MatIconModule,
    // MatButtonModule,
  ],
})
export class CaseModule {}
