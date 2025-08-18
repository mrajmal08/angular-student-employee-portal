import { Component, OnInit } from '@angular/core';
import {
  ActivatedRoute,
  NavigationEnd,
  Router,
  RouterEvent,
} from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CommentsComponent } from '../comments/comments.component';
import { AppService } from 'shared/services/app-service.service';
import { filter, map } from 'rxjs/operators';
@Component({
  selector: 'app-case-nav-bar',
  templateUrl: './case-nav-bar.component.html',
  styleUrls: ['./case-nav-bar.component.scss'],
})
export class CaseNavBarComponent implements OnInit {
  selectedLink = 'info';
  userId: string | null = '';
  caseId: number | null = null;
  currentStep = 0;

  links = [
    { value: 'info', label: 'Case' },
    { value: 'student-info', label: 'Student Info' },
    { value: 'general-docs', label: 'Docs' },
    // { value: 'financial-docs', label: 'Financial Docs' },
    { value: 'financial-docs', label: 'Financial' },
    { value: 'creditability-interview', label: 'Creditability Interview' },
    { value: 'scheduler', label: 'Scheduler' },
    { value: 'verifier', label: 'UKVI / Compliance' },
    { value: 'enrollment', label: 'Enrolment' },
    { value: 'registry', label: 'Registry' },
    { value: 'view-all', label: 'View All' },
    { value: 'comments', label: 'Comments' },
  ];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private modalService: NgbModal,
    private appService: AppService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.userId = params.get('id');
      console.log(this.userId);
    });

    this.appService.breadCrumbData$.subscribe((data) => {
      this.caseId = data.caseId ?? null;
    });

    this.router.events
      .pipe(
        filter(
          (event): event is NavigationEnd => event instanceof NavigationEnd
        ),
        map((event) => event as NavigationEnd)
      )
      .subscribe((event) => {
        const urlSegment = event.urlAfterRedirects.split('/').pop();
        this.selectedLink = urlSegment ?? '';
      });
  }

  OnNavigate(link: any, event: MouseEvent): void {
    if (link.value !== 'comments') this.selectedLink = link.value;
    if (!this.caseId) {
      const index = this.links.findIndex((l) => l.value === link.value);

      if (index > this.currentStep) {
        // Prevent forward navigation
        event.preventDefault();
        event.stopPropagation();
        return;
      }
    }

    event.preventDefault();
    if (link.value === 'comments') {
      this.openCommentsModal();
    } else {
      const baseUrl = this.userId ? '/case/edit/' : '/case/add/';
      this.router.navigateByUrl(baseUrl + link.value);
    }
  }

  openCommentsModal(): void {
    this.modalService.open(CommentsComponent, {
      size: 'lg',
      centered: true,
      backdrop: 'static',
      windowClass: 'custom-modal',
    });
  }
}
