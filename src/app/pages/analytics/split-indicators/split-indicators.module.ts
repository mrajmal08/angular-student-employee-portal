import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SplitIndicatorsRoutingModule } from './split-indicators-routing.module';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { ReactiveFormsModule } from '@angular/forms';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { NgSelectModule } from '@ng-select/ng-select';
import { SplitIndicatorsViewComponent } from './split-indicators-view/split-indicators-view.component';
@NgModule({
  declarations: [SplitIndicatorsViewComponent],
  imports: [
    CommonModule,
    SplitIndicatorsRoutingModule,
    NgxDatatableModule,
    ReactiveFormsModule,
    NgSelectModule,
    CollapseModule.forRoot(),
  ],
})
export class SplitIndicatorsModule {}
