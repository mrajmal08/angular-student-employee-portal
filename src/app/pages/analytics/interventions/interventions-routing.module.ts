import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InterventionsViewComponent } from './interventions-view/interventions-view.component';
const routes: Routes = [
  { path: '', redirectTo: 'view', pathMatch: 'full' },
  { path: 'view', component: InterventionsViewComponent },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InterventionsRoutingModule {}
