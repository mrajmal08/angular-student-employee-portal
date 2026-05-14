import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CourseDrillDownViewComponent } from './course-drill-down-view/course-drill-down-view.component';
const routes: Routes = [
  { path: '', redirectTo: 'view', pathMatch: 'full' },
  { path: 'view', component: CourseDrillDownViewComponent },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CourseDrillDownRoutingModule {}
