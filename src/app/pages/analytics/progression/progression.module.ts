import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProgressionRoutingModule } from './progression-routing.module';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { ReactiveFormsModule } from '@angular/forms';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { NgSelectModule } from '@ng-select/ng-select';
import { ProgressionViewComponent } from './progression-view/progression-view.component';
@NgModule({
  declarations: [ProgressionViewComponent],
  imports: [
    CommonModule,
    // MaterialModule,
    ProgressionRoutingModule,
    NgxDatatableModule,
    ReactiveFormsModule,
    NgSelectModule,
    CollapseModule.forRoot(),
  ],
})
export class ProgressionModule {}
