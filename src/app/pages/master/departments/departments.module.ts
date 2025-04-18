import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DepartmentsRoutingModule } from './departments-routing.module';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { ReactiveFormsModule } from '@angular/forms';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { NgSelectModule } from '@ng-select/ng-select';
import { DepartmentsFormComponent } from './departments-form/departments-form.component';
import { DepartmentsListComponent } from './departments-list/departments-list.component';
@NgModule({
  declarations: [DepartmentsListComponent, DepartmentsFormComponent],
  imports: [
    CommonModule,
    // MaterialModule,
    DepartmentsRoutingModule,
    NgxDatatableModule,
    ReactiveFormsModule,
    NgSelectModule,
    CollapseModule.forRoot(),
  ],
})
export class DepartmentsModule {}
