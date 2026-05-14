import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContinuationRoutingModule } from './continuation-routing.module';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { ReactiveFormsModule } from '@angular/forms';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { NgSelectModule } from '@ng-select/ng-select';
import { ContinuationViewComponent } from './continuation-view/continuation-view.component';
@NgModule({
  declarations: [ContinuationViewComponent],
  imports: [
    CommonModule,
    // MaterialModule,
    ContinuationRoutingModule,
    NgxDatatableModule,
    ReactiveFormsModule,
    NgSelectModule,
    CollapseModule.forRoot(),
  ],
})
export class ContinuationModule {}
