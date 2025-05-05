import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Student } from 'shared/models/student-model';
import { ApiClientService } from 'shared/services/api-client.service';
import { ConfirmDialogComponent } from 'shared/dialogs/confirm-dialog/confirm-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';

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

  // columns = [
  //   { name: 'Student ID', prop: 'id' },
  //   { name: 'Student Name', prop: 'name' },
  //   { name: 'Student Email', prop: 'email' },
  //   { name: 'Date Of Birth', prop: 'date_of_birth' },
  //   { name: 'Gender', prop: 'gender' },
  //   // { name: 'Address', prop: 'address' },
  //   { name: 'Location', prop: 'nationality' },
  // ];

  columns = [
    { name: 'Case Id', prop: 'id' },
    { name: 'Student Name', prop: 'student.name' },
    { name: 'Course', prop: 'course.name' },
    { name: 'Agent', prop: 'agent.name' },
    { name: 'Session', prop: 'session.name' },
    // { name: 'Recruitment Agent', prop: 'recruitmentAgent' },
    // { name: 'Method Of Contact', prop: 'methodOfContact' },
    // { name: 'Verifier', prop: 'verifier' },
    { name: 'Created By', prop: 'created_by' },
    { name: 'Updated By', prop: 'updated_by' },
  ];

  rows: Student[] = [];

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private apiClient: ApiClientService,
    private dialog: MatDialog,
    private toastr: ToastrService
  ) {
    this.buildForm();
  }

  buildForm() {
    this.filterForm = this.fb.group({
      name: [''],
      email: [''],
    });
  }

  ngOnInit(): void {
    this.filterForm.controls['name'].valueChanges.subscribe((value) => {
      if (value === '') {
        this.clearFilterValues();
        this.getStudents();
      } else if (!!value) {
        this.filterForm.controls['email'].setValue(null);
      }
    });

    this.filterForm.controls['email'].valueChanges.subscribe((value) => {
      if (value === '') {
        this.clearFilterValues();
        this.getStudents();
      } else if (!!value) {
        this.filterForm.controls['name'].setValue(null);
      }
    });

    this.getStudents();
  }

  clearFilterValues() {
    this.name = '';
    this.email = '';
  }

  onApplyFilters() {
    if (!!this.filterForm.controls['name'].value) {
      this.name = this.filterForm.controls['name'].value;
      this.email = '';
    } else if (!!this.filterForm.controls['email'].value) {
      this.email = this.filterForm.controls['email'].value;
      this.name = '';
    }
    this.getStudents();
  }
  getStudents(search: string = '') {
    this.apiClient
      .get('case/get?', {
        pagination: 1,
        page: this.page.page,
        per_page: this.page.perPage,
        // name: this.name,
        // email: this.email,
      })
      .subscribe((resp: any) => {
        this.page.total = resp.result.total;
        this.rows = resp.result.data;
      });
  }

  editAgent(row: any): void {
    console.log('Edit Agent:', row);
    this.router.navigateByUrl(`/applications/students/edit/${row.id}`);
    // Implement edit logic (e.g., open a modal, navigate to edit page)
  }

  deleteAgent(row: any): void {
    if (confirm('Are you sure you want to delete this agent?')) {
      console.log('Delete Agent:', row);
      // Implement delete logic (e.g., call API to remove the agent)
    }
  }

  onSelectFilters() {}

  addNewStudent() {
    let url = '/case/add/info';
    this.router.navigateByUrl(url);
  }

  onResetFilters() {
    this.clearFilterValues();
    this.filterForm.controls['name'].setValue(null);
    this.filterForm.controls['email'].setValue(null);
    this.getStudents();
  }

  setPage(pageInfo: any) {
    this.page.page = pageInfo.offset + 1;
    this.getStudents();
  }

  updatePerPage(event: any) {
    this.page.perPage = event.target.value;
    this.getStudents();
  }

  getTotalPages(): number {
    return Math.ceil(this.page.total / this.page.perPage);
  }

  onStudentNameClick(row: any, columnName: any) {
    if (columnName === 'Student Name') {
      let studentId = row.id;
      this.router.navigateByUrl(`/applications/students/view/${studentId}`, {
        state: { studentId },
      });
    } else {
      let url = `/case/edit/${row.id}/info`;
      this.router.navigateByUrl(url, { state: { row } });
    }
  }
}
