import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MethodologyRoutingModule } from './methodology-routing.module';
import { MethodologyViewComponent } from './methodology-view/methodology-view.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { ReactiveFormsModule } from '@angular/forms';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { NgSelectModule } from '@ng-select/ng-select';

@NgModule({
  declarations: [MethodologyViewComponent],
  imports: [
    CommonModule,
    MethodologyRoutingModule,
    NgxDatatableModule,
    ReactiveFormsModule,
    NgSelectModule,
    CollapseModule.forRoot(),
  ],
})
export class MethodologyModule {}
