import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentReportComponent } from './student-report/student-report.component';
const routes: Routes = [
  { path: '', redirectTo: 'list', pathMatch: 'full' },
    { path: 'student-report', component: StudentReportComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReportsRoutingModule { }
