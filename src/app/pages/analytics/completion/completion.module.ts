import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompletionRoutingModule } from './completion-routing.module';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { ReactiveFormsModule } from '@angular/forms';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { NgSelectModule } from '@ng-select/ng-select';
import { CompletionViewComponent } from './completion-view/completion-view.component';
@NgModule({
  declarations: [CompletionViewComponent],
  imports: [
    CommonModule,
    // MaterialModule,
    CompletionRoutingModule,
    NgxDatatableModule,
    ReactiveFormsModule,
    NgSelectModule,
    CollapseModule.forRoot(),
  ],
})
export class CompletionModule {}
