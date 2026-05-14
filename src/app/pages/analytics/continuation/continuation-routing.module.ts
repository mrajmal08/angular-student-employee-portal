import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContinuationViewComponent } from './continuation-view/continuation-view.component';
const routes: Routes = [
  { path: '', redirectTo: 'view', pathMatch: 'full' },
  { path: 'view', component: ContinuationViewComponent },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContinuationRoutingModule {}
