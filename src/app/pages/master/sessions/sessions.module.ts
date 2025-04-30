import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SessionsRoutingModule } from './sessions-routing.module';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { ReactiveFormsModule } from '@angular/forms';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { NgSelectModule } from '@ng-select/ng-select';
import { SessionsFormComponent } from './sessions-form/sessions-form.component';
import { SessionsListComponent } from './sessions-list/sessions-list.component';
@NgModule({
  declarations: [SessionsListComponent, SessionsFormComponent],
  imports: [
    CommonModule,
    // MaterialModule,
    SessionsRoutingModule,
    NgxDatatableModule,
    ReactiveFormsModule,
    NgSelectModule,
    CollapseModule.forRoot(),
  ],
})
export class SessionsModule {}
