import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TasksPriorityFormComponent } from './tasks-priority-form/tasks-priority-form.component';
import { TasksPriorityListComponent } from './tasks-priority-list/tasks-priority-list.component';
const routes: Routes = [
  { path: '', redirectTo: 'list', pathMatch: 'full' },
  { path: 'list', component: TasksPriorityListComponent },
  { path: 'add', component: TasksPriorityFormComponent },
  { path: 'edit/:id', component: TasksPriorityFormComponent },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TasksPriorityRoutingModule {}
