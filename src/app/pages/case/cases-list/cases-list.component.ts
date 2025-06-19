import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { ApiClientService } from 'shared/services/api-client.service';
import { AppService } from 'shared/services/app-service.service';
import { Case } from 'shared/models/case-model';

@Component({
  selector: 'app-cases-list',
  templateUrl: './cases-list.component.html',
  styleUrls: ['./cases-list.component.scss'],
  animations: [
    trigger('collapseAnimation', [
      state(
        'collapsed',
        style({
          height: '0',
          overflow: 'hidden',
          opacity: '0',
          margin: '0',
        })
      ),
      state(
        'expanded',
        style({
          height: '*',
          opacity: '1',
          margin: '*',
        })
      ),
      transition('collapsed <=> expanded', [animate('300ms ease-out')]),
    ]),
  ],
})
export class CasesListComponent implements OnInit {
  name: string = '';
  email: string = '';

  page = {
    perPage: 10,
    page: 1,
    total: 0,
  };
  perPageOptions = [10, 25, 50, 100];

  isCollapsed = true;
  filterForm!: FormGroup;

  columns = [
    { name: 'Case Id', prop: 'id' },
    // { name: 'Student Id', prop: 'student.id' },

    { name: 'Student Name', prop: 'student.name' },
    { name: 'Course', prop: 'course.name' },
    { name: 'Nationality', prop: 'student.nationality' },
    { name: 'Offer Status', prop: 'case_status.name' },

    { name: 'Agent', prop: 'agent.name' },
    { name: 'Session', prop: 'session.name' },
    { name: 'Created By', prop: 'created_by' },
    { name: 'Updated By', prop: 'updated_by' },
  ];

  rows: Case[] = [];

  constructor(
    private router: Router,
    private apiClient: ApiClientService,
    private appService: AppService
  ) {}

  ngOnInit(): void {
    this.getCases();
  }

  getCases() {
    this.apiClient
      .get('case/get?', {
        pagination: 1,
        page: this.page.page,
        per_page: this.page.perPage,
      })
      .subscribe((resp: any) => {
        this.page.total = resp.result.total;
        this.rows = resp.result.data;
      });
  }

  addNewCase() {
    let url = '/case/add/info';
    this.router.navigateByUrl(url);
  }

  setPage(pageInfo: any) {
    this.page.page = pageInfo.offset + 1;
    this.getCases();
  }

  updatePerPage(event: any) {
    this.page.perPage = event.target.value;
    this.getCases();
  }

  getTotalPages(): number {
    return Math.ceil(this.page.total / this.page.perPage);
  }

  onStudentNameClick(row: any, columnName: any) {
    let caseId = row.id;
    let studentId = row.student_id;

    if (columnName === 'Student Name') {
      this.router.navigateByUrl(`/applications/students/view/${studentId}`, {
        state: { studentId },
      });
    } else {
      let url = `/case/edit/${row.id}/info`;
      this.router.navigateByUrl(url, { state: { row } });
    }

    this.appService.updateBreadCrumbData({
      studentId: studentId,
      caseId: caseId,
    });
  }
}
