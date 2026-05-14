import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExecutiveOverviewRoutingModule } from './executive-overview-routing.module';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { ReactiveFormsModule } from '@angular/forms';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { NgSelectModule } from '@ng-select/ng-select';
import { ExecutiveOverviewComponent } from './executive-overview-view/executive-overview.component';
@NgModule({
  declarations: [ExecutiveOverviewComponent],
  imports: [
    CommonModule,
    // MaterialModule,
    ExecutiveOverviewRoutingModule,
    NgxDatatableModule,
    ReactiveFormsModule,
    NgSelectModule,
    CollapseModule.forRoot(),
  ],
})
export class ExecutiveOverviewModule {}
