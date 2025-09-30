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
import { ToastrService } from 'ngx-toastr';
import { ConfirmDialogComponent } from 'shared/dialogs/confirm-dialog/confirm-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { TaskStatus } from 'shared/models/taskStatus-model';

@Component({
  selector: 'app-tasks-type-list',
  templateUrl: './tasks-type-list.component.html',
  styleUrls: ['./tasks-type-list.component.scss'],
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
export class TasksTypeListComponent implements OnInit {
  page = {
    perPage: 10,
    page: 1,
    total: 0,
  };
  perPageOptions = [10, 25, 50, 100];

  // isCollapsed = true;      veriable for collapsed animation for filters (Unused currently)
  filterForm!: FormGroup;

  columns = [
    { name: 'Task Type ID', prop: 'id' },
    { name: 'Task Type Name', prop: 'name' },
    { name: 'Description', prop: 'description' },

    // { name: 'Created At', prop: 'created_at' },
    { name: 'Created By', prop: 'created_by' },
    { name: 'Updated By', prop: 'updated_by' },
  ];

  rows: TaskStatus[] = [];
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
        this.getTaskTypes();
      }
    });
    this.getTaskTypes();
  }

  getTaskTypes(search: string = '') {
    this.apiClient
      .get('task_type', {
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
    this.getTaskTypes();
  }

  updatePerPage(event: any) {
    this.page.perPage = event.target.value;
    this.getTaskTypes();
  }

  getTotalPages(): number {
    return Math.ceil(this.page.total / this.page.perPage);
  }

  onResetFilters() {
    this.filterForm.controls['name'].setValue(null);
    this.getTaskTypes();
  }
  onApplyFilters() {
    this.getTaskTypes(this.filterForm.controls['name'].value);
  }

  addNewTaskType() {
    this.router.navigateByUrl(`/tasks-type/add`);
  }

  editTaskType(row: any): void {
    this.router.navigateByUrl(`/tasks-type/edit/${row.id}`, { state: { row } });
  }

  onDeleteTaskType(row: any): void {
    this.showAlert(
      'warning',
      'Delete Task Type?',
      'Do you really want to delete this Task Type.',
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
        this.deleteTaskType(id);
      }
    });
  }

  deleteTaskType(id: number) {
    this.apiClient
      .post(`task_type/delete/${id}`)
      .toPromise()
      .then((resp) => {
        this.toastr.success('Task Type Deleted successfully!', 'Success');
        this.getTaskTypes();
      })
      .catch((err) => {
        this.toastr.error(err.error.message, 'Error');
      });
  }

  onCheckboxChange(event: Event, row: any) {
    console.log('Event and row', event, row);
  }
}
