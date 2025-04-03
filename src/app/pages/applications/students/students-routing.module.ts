import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentsListComponent } from './students-list/students-list.component';
import { StudentsCreateComponent } from './students-create/students-create.component';
import { StudentsViewComponent } from './students-view/students-view.component';

const routes: Routes = [
  { path: '', redirectTo: 'list', pathMatch: 'full' },
  { path: 'list', component: StudentsListComponent },
  { path: 'add', component: StudentsCreateComponent },
  { path: 'edit/:id', component: StudentsCreateComponent },
  { path: 'view/:id', component: StudentsViewComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentsRoutingModule { }
