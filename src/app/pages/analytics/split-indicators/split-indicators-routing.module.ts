import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SplitIndicatorsViewComponent } from './split-indicators-view/split-indicators-view.component';
const routes: Routes = [
  { path: '', redirectTo: 'view', pathMatch: 'full' },
  { path: 'view', component: SplitIndicatorsViewComponent },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SplitIndicatorsRoutingModule {}
