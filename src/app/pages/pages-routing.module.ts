import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages.component';

const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      {
        path: 'dashboard',
        loadChildren: () =>
          import('./dashboard/dashboard.module').then((m) => m.DashboardModule),
      },
      {
        path: 'patients',
        loadChildren: () =>
          import('./patients/patients.module').then((m) => m.PatientsModule),
      },
      {
        path: 'applications',
        loadChildren: () =>
          import('./applications/applications.module').then(
            (m) => m.ApplicationsModule
          ),
      },
      {
        path: 'agents',
        loadChildren: () =>
          import('./recruitment-agent/recruitment-agent.module').then(
            (m) => m.RecruitmentAgentModule
          ),
      },
      {
        path: 'case',
        loadChildren: () =>
          import('./case/case.module').then((m) => m.CaseModule),
      },
      {
        path: 'users',
        loadChildren: () =>
          import('./master/users/users.module').then((m) => m.UsersModule),
      },
      {
        path: 'courses',
        loadChildren: () =>
          import('./master/courses/courses.module').then(
            (m) => m.CoursesModule
          ),
      },
      {
        path: 'sessions',
        loadChildren: () =>
          import('./master/sessions/sessions.module').then(
            (m) => m.SessionsModule
          ),
      },
      {
        path: 'tasks-status',
        loadChildren: () =>
          import('./master/tasks-status/tasks-status.module').then(
            (m) => m.TasksStatusModule
          ),
      },
      {
        path: 'tasks-type',
        loadChildren: () =>
          import('./master/tasks-type/tasks-type.module').then(
            (m) => m.TasksTypeModule
          ),
      },
      {
        path: 'tasks-priority',
        loadChildren: () =>
          import('./master/tasks-priority/tasks-priority.module').then(
            (m) => m.TasksPriorityModule
          ),
      },

      {
        path: 'departments',
        loadChildren: () =>
          import('./master/departments/departments.module').then(
            (m) => m.DepartmentsModule
          ),
      },
      {
        path: 'designations',
        loadChildren: () =>
          import('./master/designations/designations.module').then(
            (m) => m.DesignationsModule
          ),
      },

      {
        path: 'status',
        loadChildren: () =>
          import('./master/status/status.module').then((m) => m.StatusModule),
      },
      {
        path: 'task',
        loadChildren: () =>
          import('./task/task.module').then((m) => m.TaskModule),
      },
      {
        path: 'reports',
        loadChildren: () =>
          import('./reports/reports.module').then((m) => m.ReportsModule),
      },

      {
        path: 'executive-overview',
        loadChildren: () =>
          import(
            './analytics/executive-overview/executive-overview.module'
          ).then((m) => m.ExecutiveOverviewModule),
      },

      {
        path: 'continuation',
        loadChildren: () =>
          import('./analytics/continuation/continuation.module').then(
            (m) => m.ContinuationModule
          ),
      },

      {
        path: 'completion',
        loadChildren: () =>
          import('./analytics/completion/completion.module').then(
            (m) => m.CompletionModule
          ),
      },

      {
        path: 'progression',
        loadChildren: () =>
          import('./analytics/progression/progression.module').then(
            (m) => m.ProgressionModule
          ),
      },

      {
        path: 'split-indicators',
        loadChildren: () =>
          import('./analytics/split-indicators/split-indicators.module').then(
            (m) => m.SplitIndicatorsModule
          ),
      },

      {
        path: 'course-drill-down',
        loadChildren: () =>
          import('./analytics/course-drill-down/course-drill-down.module').then(
            (m) => m.CourseDrillDownModule
          ),
      },

      {
        path: 'student-risk-list',
        loadChildren: () =>
          import('./analytics/student-risk-list/student-risk-list.module').then(
            (m) => m.StudentRiskListModule
          ),
      },

      {
        path: 'data-quality',
        loadChildren: () =>
          import('./analytics/data-quality/data-quality.module').then(
            (m) => m.DataQualityModule
          ),
      },

      {
        path: 'interventions',
        loadChildren: () =>
          import('./analytics/interventions/interventions.module').then(
            (m) => m.InterventionsModule
          ),
      },

      {
        path: 'methodology',
        loadChildren: () =>
          import('./analytics/methodology/methodology.module').then(
            (m) => m.MethodologyModule
          ),
      },
    ],
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
