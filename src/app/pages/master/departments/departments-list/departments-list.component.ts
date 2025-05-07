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
import { Department } from 'shared/models/department-model';

@Component({
  selector: 'app-departments-list',
  templateUrl: './departments-list.component.html',
  styleUrls: ['./departments-list.component.scss'],
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
export class DepartmentsListComponent implements OnInit {
  page = {
    perPage: 10,
    page: 1,
    total: 0,
  };
  perPageOptions = [10, 25, 50, 100];

  // isCollapsed = true;      veriable for collapsed animation for filters (Unused currently)
  filterForm!: FormGroup;

  columns = [
    { name: 'Department ID', prop: 'id' },
    { name: 'Department Name', prop: 'name' },
    { name: 'Department Description', prop: 'description' },

    // { name: 'Created At', prop: 'created_at' },
    { name: 'Created By', prop: 'created_by' },
    { name: 'Updated By', prop: 'updated_by' },
  ];

  rows: Department[] = [];
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
        this.getDepartments();
      }
    });
    this.getDepartments();
  }

  getDepartments(search: string = '') {
    this.apiClient
      .get('departments', {
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
            // created_at: getUKFormatedDate(row.created_at),
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
    this.getDepartments();
  }

  updatePerPage(event: any) {
    this.page.perPage = event.target.value;
    this.getDepartments();
  }

  getTotalPages(): number {
    return Math.ceil(this.page.total / this.page.perPage);
  }

  onResetFilters() {
    this.filterForm.controls['name'].setValue(null);
    this.getDepartments();
  }
  onApplyFilters() {
    this.getDepartments(this.filterForm.controls['name'].value);
  }

  addNewDepartment() {
    this.router.navigateByUrl(`/departments/add`);
  }

  editDepartment(row: any): void {
    this.router.navigateByUrl(`/departments/edit/${row.id}`, {
      state: { row },
    });
  }

  onDeleteDepartment(row: any): void {
    this.showAlert(
      'warning',
      'Delete Department?',
      'Do you really want to delete this department.',
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
        this.deleteDepartment(id);
      }
    });
  }

  deleteDepartment(id: number) {
    this.apiClient
      .get(`department/delete/${id}`)
      .toPromise()
      .then((resp) => {
        this.toastr.success('Department Deleted successfully!', 'Success');
        this.getDepartments();
      })
      .catch((err) => {
        this.toastr.error(err.error.message, 'Error');
      });
  }

  onCheckboxChange(event: Event, row: any) {
    console.log('Event and row', event, row);
  }
}
