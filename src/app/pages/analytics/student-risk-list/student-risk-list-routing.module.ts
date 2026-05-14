import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentRiskListViewComponent } from './student-risk-list-view/student-risk-list-view.component';
const routes: Routes = [
  { path: '', redirectTo: 'view', pathMatch: 'full' },
  { path: 'view', component: StudentRiskListViewComponent },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StudentRiskListRoutingModule {}
