import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'shared/guards/auth.guard';

const routes: Routes = [
  // { path: '', redirectTo: 'auth', pathMatch: 'full' },
  { path: '', redirectTo: 'auth', pathMatch: 'full' }, // Redirect root to auth
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: '',
    loadChildren: () =>
      import('./pages/pages.module').then((m) => m.PagesModule),
    canLoad: [AuthGuard],
  },
  { path: '**', redirectTo: 'auth', pathMatch: 'full' },
  // { path: '**', redirectTo: 'dashboard', pathMatch: 'full' } // Default fallback
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
