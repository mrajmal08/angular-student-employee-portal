import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DesignationsRoutingModule } from './designations-routing.module';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { ReactiveFormsModule } from '@angular/forms';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { NgSelectModule } from '@ng-select/ng-select';
import { DesignationsFormComponent } from './designations-form/designations-form.component';
import { DesignationsListComponent } from './designations-list/designations-list.component';
@NgModule({
  declarations: [DesignationsListComponent, DesignationsFormComponent],
  imports: [
    CommonModule,
    // MaterialModule,
    DesignationsRoutingModule,
    NgxDatatableModule,
    ReactiveFormsModule,
    NgSelectModule,
    CollapseModule.forRoot(),
  ],
})
export class DesignationsModule {}
