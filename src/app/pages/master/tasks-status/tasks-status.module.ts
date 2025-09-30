import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TasksStatusRoutingModule } from './tasks-status-routing.module';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { ReactiveFormsModule } from '@angular/forms';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { NgSelectModule } from '@ng-select/ng-select';
import { TasksStatusFormComponent } from './tasks-status-form/tasks-status-form.component';
import { TasksStatusListComponent } from './tasks-status-list/tasks-status-list.component';
@NgModule({
  declarations: [TasksStatusListComponent, TasksStatusFormComponent],
  imports: [
    CommonModule,
    // MaterialModule,
    TasksStatusRoutingModule,
    NgxDatatableModule,
    ReactiveFormsModule,
    NgSelectModule,
    CollapseModule.forRoot(),
  ],
})
export class TasksStatusModule {}
