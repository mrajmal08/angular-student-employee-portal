import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompletionViewComponent } from './completion-view/completion-view.component';
const routes: Routes = [
  { path: '', redirectTo: 'view', pathMatch: 'full' },
  { path: 'view', component: CompletionViewComponent },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CompletionRoutingModule {}
