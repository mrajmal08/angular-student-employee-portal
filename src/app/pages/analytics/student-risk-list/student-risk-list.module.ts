import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentRiskListRoutingModule } from './student-risk-list-routing.module';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { ReactiveFormsModule } from '@angular/forms';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { NgSelectModule } from '@ng-select/ng-select';
import { StudentRiskListViewComponent } from './student-risk-list-view/student-risk-list-view.component';
@NgModule({
  declarations: [StudentRiskListViewComponent],
  imports: [
    CommonModule,
    // MaterialModule,
    StudentRiskListRoutingModule,
    NgxDatatableModule,
    ReactiveFormsModule,
    NgSelectModule,
    CollapseModule.forRoot(),
  ],
})
export class StudentRiskListModule {}
