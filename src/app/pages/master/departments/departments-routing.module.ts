import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DepartmentsFormComponent } from './departments-form/departments-form.component';
import { DepartmentsListComponent } from './departments-list/departments-list.component';
const routes: Routes = [
  { path: '', redirectTo: 'list', pathMatch: 'full' },
  { path: 'list', component: DepartmentsListComponent },
  { path: 'add', component: DepartmentsFormComponent },
  { path: 'edit/:id', component: DepartmentsFormComponent },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DepartmentsRoutingModule {}
