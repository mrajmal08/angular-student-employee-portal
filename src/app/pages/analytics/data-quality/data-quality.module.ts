import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataQualityRoutingModule } from './data-quality-routing.module';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { ReactiveFormsModule } from '@angular/forms';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { NgSelectModule } from '@ng-select/ng-select';
import { DataQualityViewComponent } from './data-quality-view/data-quality-view.component';
@NgModule({
  declarations: [DataQualityViewComponent],
  imports: [
    CommonModule,
    // MaterialModule,
    DataQualityRoutingModule,
    NgxDatatableModule,
    ReactiveFormsModule,
    NgSelectModule,
    CollapseModule.forRoot(),
  ],
})
export class DataQualityModule {}
