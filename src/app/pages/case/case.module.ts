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
import { ReactiveFormsModule } from '@angular/forms';
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
    SchedulerInterviewComponent,
    ReferrerComponent,
    DocsComponent,
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
  ],
  imports: [
    CommonModule,
    CaseRoutingModule,
    ReactiveFormsModule,
    NgSelectModule,
    NgxDatatableModule,
    TabViewModule,
    NgbModule,

    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
  ],
})
export class CaseModule {}
