import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SessionsFormComponent } from './sessions-form/sessions-form.component';
import { SessionsListComponent } from './sessions-list/sessions-list.component';
const routes: Routes = [
  { path: '', redirectTo: 'list', pathMatch: 'full' },
  { path: 'list', component: SessionsListComponent },
  { path: 'add', component: SessionsFormComponent },
  { path: 'edit/:id', component: SessionsFormComponent },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SessionsRoutingModule {}
