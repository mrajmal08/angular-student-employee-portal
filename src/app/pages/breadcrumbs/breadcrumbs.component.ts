import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';
import { Student } from 'shared/models/student-model';
import { ApiClientService } from 'shared/services/api-client.service';
import { AppService } from 'shared/services/app-service.service';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.scss'],
})
export class BreadcrumbsComponent implements OnInit {
  studentData: Student | null = null;
  @Input() isCaseRoute = false;
  studentId: number | null = null;
  caseId: number | null = null;

  breadcrumbs: { label: string; url: string }[] = [];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private appService: AppService,
    private apiClient: ApiClientService
  ) {}

  ngOnInit(): void {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => {
        this.generateBreadcrumbs();
      });

    this.appService.breadCrumbData$.subscribe((data) => {
      this.studentId = data.studentId ?? null;
      this.caseId = data.caseId ?? null;
      if (this.studentId) {
        this.getSingleStudent();
      }
    });
    this.generateBreadcrumbs();
  }

  getSingleStudent() {
    this.apiClient
      .get(`student/single/${this.studentId}`, {})
      .subscribe((resp: any) => {
        this.studentData = resp.result;
      });
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['isCaseRoute']) {
      if (!this.isCaseRoute) {
        this.appService.updateBreadCrumbData({
          studentId: null,
          caseId: null,
        });
        this.studentData = null;
      }
    }
  }

  generateBreadcrumbs(): void {
    this.breadcrumbs = [];
    let url = '';
    let currentRoute = this.route.root;

    while (currentRoute.firstChild) {
      currentRoute = currentRoute.firstChild;
      if (currentRoute.snapshot.url.length) {
        const pathSegment = currentRoute.snapshot.url
          .map((segment) => segment.path)
          .join('/');
        url += `/${pathSegment}`;
        this.breadcrumbs.push({ label: pathSegment, url: url });
      }
    }
  }

  formatBreadcrumb(label: string): string {
    return label
      .split('/')
      .map((word) => this.toTitleCase(word))
      .join(' <span style="padding: 0 8px;">/</span> ');
  }

  toTitleCase(str: string): string {
    return str.replace(/\b\w/g, (char) => char.toUpperCase());
  }

  GetYears(date: string | undefined): number {
    const dateObj = new Date(date!);
    const today = new Date();

    const years = today.getFullYear() - dateObj.getFullYear();
    const m = today.getMonth() - dateObj.getMonth();
    const d = today.getDate() - dateObj.getDate();
    const finalYears = m < 0 || (m === 0 && d < 0) ? years - 1 : years;
    return finalYears;
  }

  GetDOB(date: string | undefined): string {
    const dateObj = new Date(date!);
    const day = String(dateObj.getDate()).padStart(2, '0');
    const month = String(dateObj.getMonth() + 1).padStart(2, '0'); // Months are 0-indexed
    const year = dateObj.getFullYear();
    const formattedDate = `${day}/${month}/${year}`;
    return formattedDate;
  }

  getCompleteAddress() {
    return this.studentData?.address + ' ' + this.studentData?.address2;
  }

  getStudentName(): string {
    const name = this.studentData?.name?.trim() || '';
    const surname = this.studentData?.surname?.trim() || '';
    const fullName = `${name} ${surname}`.trim();
    return fullName ? fullName : '';
  }
}
