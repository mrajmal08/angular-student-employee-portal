import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DataQualityViewComponent } from './data-quality-view/data-quality-view.component';
const routes: Routes = [
  { path: '', redirectTo: 'view', pathMatch: 'full' },
  { path: 'view', component: DataQualityViewComponent },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DataQualityRoutingModule {}
