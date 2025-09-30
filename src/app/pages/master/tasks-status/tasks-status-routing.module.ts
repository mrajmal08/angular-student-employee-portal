import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TasksStatusFormComponent } from './tasks-status-form/tasks-status-form.component';
import { TasksStatusListComponent } from './tasks-status-list/tasks-status-list.component';
const routes: Routes = [
  { path: '', redirectTo: 'list', pathMatch: 'full' },
  { path: 'list', component: TasksStatusListComponent },
  { path: 'add', component: TasksStatusFormComponent },
  { path: 'edit/:id', component: TasksStatusFormComponent },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TasksStatusRoutingModule {}
