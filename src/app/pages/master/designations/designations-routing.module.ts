import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DesignationsFormComponent } from './designations-form/designations-form.component';
import { DesignationsListComponent } from './designations-list/designations-list.component';
const routes: Routes = [
  { path: '', redirectTo: 'list', pathMatch: 'full' },
  { path: 'list', component: DesignationsListComponent },
  { path: 'add', component: DesignationsFormComponent },
  { path: 'edit/:id', component: DesignationsFormComponent },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DesignationsRoutingModule {}
