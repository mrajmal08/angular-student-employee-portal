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
import { Student } from 'shared/models/student-model';
import { ApiClientService } from 'shared/services/api-client.service';
import { ConfirmDialogComponent } from 'shared/dialogs/confirm-dialog/confirm-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-students-list',
  templateUrl: './students-list.component.html',
  styleUrls: ['./students-list.component.scss'],
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
export class StudentsListComponent implements OnInit {
  name: string = '';
  email: string = '';

  page = {
    perPage: 10,
    page: 1,
    total: 0,
  };
  perPageOptions = [10, 25, 50, 100];

  studentForm!: FormGroup;

  columns = [
    { name: 'Student ID', prop: 'id' },
    { name: 'Student Name', prop: 'name' },
    { name: 'Student Email', prop: 'email' },
    { name: 'Date Of Birth', prop: 'date_of_birth' },
    { name: 'Gender', prop: 'gender' },
    { name: 'Location', prop: 'nationality' },
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
    this.studentForm = this.fb.group({
      name: [''],
      email: [''],
    });
  }

  ngOnInit(): void {
    this.studentForm.controls['name'].valueChanges.subscribe((value) => {
      if (value === '') {
        this.clearFilterValues();
        this.getStudents();
      } else if (!!value) {
        this.studentForm.controls['email'].setValue(null);
      }
    });

    this.studentForm.controls['email'].valueChanges.subscribe((value) => {
      if (value === '') {
        this.clearFilterValues();
        this.getStudents();
      } else if (!!value) {
        this.studentForm.controls['name'].setValue(null);
      }
    });

    this.getStudents();
  }

  clearFilterValues() {
    this.name = '';
    this.email = '';
  }

  onApplyFilters() {
    if (!!this.studentForm.controls['name'].value) {
      this.name = this.studentForm.controls['name'].value;
      this.email = '';
    } else if (!!this.studentForm.controls['email'].value) {
      this.email = this.studentForm.controls['email'].value;
      this.name = '';
    }
    this.getStudents();
  }
  getStudents() {
    this.apiClient
      .get('students', {
        pagination: 1,
        page: this.page.page,
        per_page: this.page.perPage,
        name: this.name,
        email: this.email,
      })
      .subscribe((resp: any) => {
        this.page.total = resp.result.total;
        this.rows = resp.result.data;
      });
  }

  addNewStudent() {
    this.router.navigateByUrl(`/applications/students/add`);
  }

  onResetFilters() {
    this.clearFilterValues();
    this.studentForm.controls['name'].setValue(null);
    this.studentForm.controls['email'].setValue(null);
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

  onStudentNameClick(studentId: any) {
    this.router.navigateByUrl(`/applications/students/view/${studentId}`, {
      state: { studentId },
    });
  }

  editStudent(row: any): void {
    this.router.navigateByUrl(`/applications/students/edit/${row.id}`, {
      state: { row },
    });
  }

  onDeleteStudent(row: any): void {
    this.showAlert(
      'warning',
      'Delete Student?',
      'Do you really want to delete this student.',
      row.id
    );
  }

  showAlert(type: string, title: string, message: string, id: number) {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      width: '400px',
      panelClass: 'custom-dialog-container',
      backdropClass: 'custom-dialog-backdrop',
      position: { top: '50%', left: '50%' },
      data: { type: type, title: title, message: message },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.deleteStudent(id);
      }
    });
  }

  deleteStudent(id: number) {
    this.apiClient
      .get(`student/delete/${id}`)
      .toPromise()
      .then((resp) => {
        this.toastr.success('Student Deleted successfully!', 'Success');
        this.getStudents();
      })
      .catch((err) => {
        this.toastr.error(err.error.message, 'Error');
      });
  }

  onCheckboxChange(event: Event, row: any) {
    console.log('Event and row', event, row);
  }
}
