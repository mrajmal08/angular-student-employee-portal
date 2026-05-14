import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseDrillDownRoutingModule } from './course-drill-down-routing.module';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { ReactiveFormsModule } from '@angular/forms';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { NgSelectModule } from '@ng-select/ng-select';
import { CourseDrillDownViewComponent } from './course-drill-down-view/course-drill-down-view.component';
@NgModule({
  declarations: [CourseDrillDownViewComponent],
  imports: [
    CommonModule,
    // MaterialModule,
    CourseDrillDownRoutingModule,
    NgxDatatableModule,
    ReactiveFormsModule,
    NgSelectModule,
    CollapseModule.forRoot(),
  ],
})
export class CourseDrillDownModule {}
