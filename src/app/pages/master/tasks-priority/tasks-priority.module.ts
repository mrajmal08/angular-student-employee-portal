import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TasksPriorityRoutingModule } from './tasks-priority-routing.module';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { ReactiveFormsModule } from '@angular/forms';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { NgSelectModule } from '@ng-select/ng-select';
import { TasksPriorityFormComponent } from './tasks-priority-form/tasks-priority-form.component';
import { TasksPriorityListComponent } from './tasks-priority-list/tasks-priority-list.component';
@NgModule({
  declarations: [TasksPriorityListComponent, TasksPriorityFormComponent],
  imports: [
    CommonModule,
    // MaterialModule,
    TasksPriorityRoutingModule,
    NgxDatatableModule,
    ReactiveFormsModule,
    NgSelectModule,
    CollapseModule.forRoot(),
  ],
})
export class TasksPriorityModule {}
