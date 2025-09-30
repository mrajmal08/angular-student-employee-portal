import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TasksTypeRoutingModule } from './tasks-type-routing.module';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { ReactiveFormsModule } from '@angular/forms';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { NgSelectModule } from '@ng-select/ng-select';
import { TasksTypeFormComponent } from './tasks-type-form/tasks-type-form.component';
import { TasksTypeListComponent } from './tasks-type-list/tasks-type-list.component';
@NgModule({
  declarations: [TasksTypeListComponent, TasksTypeFormComponent],
  imports: [
    CommonModule,
    // MaterialModule,
    TasksTypeRoutingModule,
    NgxDatatableModule,
    ReactiveFormsModule,
    NgSelectModule,
    CollapseModule.forRoot(),
  ],
})
export class TasksTypeModule {}
