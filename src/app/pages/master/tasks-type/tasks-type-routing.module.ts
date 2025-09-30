import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TasksTypeFormComponent } from './tasks-type-form/tasks-type-form.component';
import { TasksTypeListComponent } from './tasks-type-list/tasks-type-list.component';
const routes: Routes = [
  { path: '', redirectTo: 'list', pathMatch: 'full' },
  { path: 'list', component: TasksTypeListComponent },
  { path: 'add', component: TasksTypeFormComponent },
  { path: 'edit/:id', component: TasksTypeFormComponent },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TasksTypeRoutingModule {}
