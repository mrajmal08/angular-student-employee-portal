import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProgressionViewComponent } from './progression-view/progression-view.component';
const routes: Routes = [
  { path: '', redirectTo: 'view', pathMatch: 'full' },
  { path: 'view', component: ProgressionViewComponent },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProgressionRoutingModule {}
