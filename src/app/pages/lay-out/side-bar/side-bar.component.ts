import { Component, OnDestroy, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Subscription } from 'rxjs';

interface SideNavItem {
  label: string;
  route: string;
  matchRoutes: string[];
}

interface SideNavSection {
  id: string;
  label: string;
  icon: string;
  matchRoutes: string[];
  expanded: boolean;
  items: SideNavItem[];
}

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss'],
})
export class SideBarComponent implements OnInit, OnDestroy {
  private routeSubscription?: Subscription;

  menuSections: SideNavSection[] = [
    {
      id: 'applications',
      label: 'Application Module',
      icon: 'bi bi-journal-text',
      matchRoutes: ['/applications', '/case'],
      expanded: true,
      items: [
        {
          label: 'Students',
          route: '/applications/students/list',
          matchRoutes: ['/applications/students'],
        },
        {
          label: 'Cases',
          route: '/case/list',
          matchRoutes: ['/case'],
        },
        {
          label: 'Create New Application',
          route: '/applications/create',
          matchRoutes: ['/applications/create'],
        },
      ],
    },
    {
      id: 'tasks',
      label: 'Tasks',
      icon: 'bi bi-menu-button-wide-fill',
      matchRoutes: ['/task'],
      expanded: false,
      items: [
        {
          label: 'My Tasks',
          route: '/task/list',
          matchRoutes: ['/task/list'],
        },
        {
          label: 'Create Task',
          route: '/task/add',
          matchRoutes: ['/task/add', '/task/edit'],
        },
      ],
    },
    {
      id: 'master',
      label: 'Master',
      icon: 'bi bi-gear-wide-connected',
      matchRoutes: [
        '/users',
        '/courses',
        '/status',
        '/departments',
        '/designations',
        '/sessions',
        '/tasks-status',
        '/tasks-type',
        '/tasks-priority',
      ],
      expanded: false,
      items: [
        { label: 'Users', route: '/users/list', matchRoutes: ['/users'] },
        { label: 'Courses', route: '/courses/list', matchRoutes: ['/courses'] },
        { label: 'Status', route: '/status/list', matchRoutes: ['/status'] },
        {
          label: 'Departments',
          route: '/departments/list',
          matchRoutes: ['/departments'],
        },
        {
          label: 'Designations',
          route: '/designations/list',
          matchRoutes: ['/designations'],
        },
        {
          label: 'Sessions',
          route: '/sessions/list',
          matchRoutes: ['/sessions'],
        },
        {
          label: 'Tasks Status',
          route: '/tasks-status/list',
          matchRoutes: ['/tasks-status'],
        },
        {
          label: 'Tasks Type',
          route: '/tasks-type/list',
          matchRoutes: ['/tasks-type'],
        },
        {
          label: 'Tasks Priority',
          route: '/tasks-priority/list',
          matchRoutes: ['/tasks-priority'],
        },
      ],
    },
    {
      id: 'reports',
      label: 'Reports',
      icon: 'bi bi-bar-chart-line',
      matchRoutes: ['/reports'],
      expanded: false,
      items: [
        {
          label: 'Student Report',
          route: '/reports/student-report',
          matchRoutes: ['/reports/student-report'],
        },
      ],
    },

    {
      id: 'analytics',
      label: 'Analytics',
      icon: 'bi bi-gear-wide-connected',
      matchRoutes: [
        '/executive-overview',
        '/continuation',
        '/completion',
        '/progression',
        '/split-indicators',
        '/course-drill-down',
        '/student-risk-list',
        '/data-quality',
        '/interventions',
        '/methodology',
      ],
      expanded: false,
      items: [
        {
          label: 'Executive Overview',
          route: '/executive-overview/view',
          matchRoutes: ['/executive-overview'],
        },
        {
          label: 'Continuation',
          route: '/continuation/view',
          matchRoutes: ['/continuation'],
        },
        {
          label: 'Completion',
          route: '/completion/view',
          matchRoutes: ['/completion'],
        },
        {
          label: 'Progression',
          route: '/progression/view',
          matchRoutes: ['/progression'],
        },
        {
          label: 'Split Indicators',
          route: '/split-indicators/view',
          matchRoutes: ['/split-indicators'],
        },
        {
          label: 'Course Drill-down',
          route: '/course-drill-down/view',
          matchRoutes: ['/course-drill-down'],
        },
        {
          label: 'Student Risk List',
          route: '/student-risk-list/view',
          matchRoutes: ['/student-risk-list'],
        },
        {
          label: 'Data Quality',
          route: '/data-quality/view',
          matchRoutes: ['/data-quality'],
        },
        {
          label: 'Interventions',
          route: '/interventions/view',
          matchRoutes: ['/interventions'],
        },
        {
          label: 'Methodology',
          route: '/methodology/view',
          matchRoutes: ['/methodology'],
        },
      ],
    },
  ];

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.syncExpandedSections(this.router.url);
    this.routeSubscription = this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.syncExpandedSections(event.urlAfterRedirects);
      }
    });
  }

  ngOnDestroy(): void {
    this.routeSubscription?.unsubscribe();
  }

  toggleSection(sectionId: string): void {
    this.menuSections = this.menuSections.map((section) =>
      section.id === sectionId
        ? { ...section, expanded: !section.expanded }
        : section
    );
  }

  isSectionActive(section: SideNavSection): boolean {
    return this.isRouteActive(section.matchRoutes);
  }

  isItemActive(item: SideNavItem): boolean {
    return this.isRouteActive(item.matchRoutes);
  }

  isRouteActive(routes: string[]): boolean {
    const currentUrl = this.normalizeUrl(this.router.url);

    return routes.some((route) => {
      const normalizedRoute = this.normalizeUrl(route);
      return (
        currentUrl === normalizedRoute ||
        currentUrl.startsWith(`${normalizedRoute}/`)
      );
    });
  }

  private syncExpandedSections(url: string): void {
    const currentUrl = this.normalizeUrl(url);

    this.menuSections = this.menuSections.map((section) => ({
      ...section,
      expanded:
        section.expanded ||
        section.matchRoutes.some((route) => {
          const normalizedRoute = this.normalizeUrl(route);
          return (
            currentUrl === normalizedRoute ||
            currentUrl.startsWith(`${normalizedRoute}/`)
          );
        }),
    }));
  }

  private normalizeUrl(url: string): string {
    return url.split('?')[0].split('#')[0];
  }
}
