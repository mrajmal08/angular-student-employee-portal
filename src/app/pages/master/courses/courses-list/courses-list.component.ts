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
import { ApiClientService } from 'shared/services/api-client.service';
import { getUKFormatedDate } from 'shared/helpers/common-helper';
import { ToastrService } from 'ngx-toastr';
import { ConfirmDialogComponent } from 'shared/dialogs/confirm-dialog/confirm-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { Course } from 'shared/models/course-model';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.scss'],
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
export class CoursesListComponent implements OnInit {
  page = {
    perPage: 10,
    page: 1,
    total: 0,
  };
  perPageOptions = [10, 25, 50, 100];

  // isCollapsed = true;      veriable for collapsed animation for filters (Unused currently)
  filterForm!: FormGroup;

  columns = [
    { name: 'Course ID', prop: 'id' },
    { name: 'Course Name', prop: 'name' },
    { name: 'Created At', prop: 'created_at' },
    { name: 'Created By', prop: 'created_by' },
    { name: 'Updated By', prop: 'updated_by' },
  ];

  rows: Course[] = [];
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private apiClient: ApiClientService,
    private toastr: ToastrService,
    private dialog: MatDialog
  ) {
    this.buildForm();
  }

  ngOnInit(): void {
    this.filterForm.controls['name'].valueChanges.subscribe((value) => {
      if (value === '') {
        this.getCourses();
      }
    });
    this.getCourses();
  }

  getCourses(search: string = '') {
    this.apiClient
      .get('courses', {
        pagination: 1,
        page: this.page.page,
        per_page: this.page.perPage,
        name: search ? search : '',
      })
      .subscribe((resp: any) => {
        this.page.total = resp.result.total;
        this.rows = resp.result.data.map(
          (row: { created_at: string; updated_at: string }) => ({
            ...row,
            created_at: getUKFormatedDate(row.created_at),
          })
        );
      });
  }

  buildForm() {
    this.filterForm = this.fb.group({
      name: [''],
      // ssn4: ['', [Validators.minLength(4), Validators.maxLength(4)]],
    });
  }

  setPage(pageInfo: any) {
    this.page.page = pageInfo.offset + 1;
    this.getCourses();
  }

  updatePerPage(event: any) {
    this.page.perPage = event.target.value;
    this.getCourses();
  }

  getTotalPages(): number {
    return Math.ceil(this.page.total / this.page.perPage);
  }

  onResetFilters() {
    this.filterForm.controls['name'].setValue(null);
    this.getCourses();
  }
  onApplyFilters() {
    this.getCourses(this.filterForm.controls['name'].value);
  }

  addNewCourse() {
    this.router.navigateByUrl(`/courses/add`);
  }

  editCourse(row: any): void {
    console.log('Edit Agent:', row);
    this.router.navigateByUrl(`/courses/edit/${row.id}`, { state: { row } });
  }

  onDeleteCourse(row: any): void {
    if (confirm('Are you sure you want to delete this course?')) {
      this.deleteCourse(row.id);
    }
  }

  showAlert(type: string, message: string) {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      width: '400px',
      panelClass: 'custom-dialog-container',
      position: { top: '50%', left: '50%' },
      data: { message: message, type: type },
    });

    dialogRef.afterClosed().subscribe((result) => {});
  }

  deleteCourse(id: number) {
    this.apiClient
      .get(`course/delete/${id}`)
      .toPromise()
      .then((resp) => {
        this.toastr.success('Course Deleted successfully!', 'Success');
        this.getCourses();
      })
      .catch((err) => {
        this.showAlert('error', err.error.message);
      });
  }
}
