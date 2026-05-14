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
  selector: 'app-student-risk-list-view',
  templateUrl: './student-risk-list-view.component.html',
  styleUrls: ['./student-risk-list-view.component.scss'],
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
export class StudentRiskListViewComponent implements OnInit {
  page = {
    perPage: 10,
    page: 1,
    total: 0,
  };
  perPageOptions = [10, 25, 50, 100];

  // isCollapsed = true;      veriable for collapsed animation for filters (Unused currently)
  filterForm!: FormGroup;

  columns = [
    { name: 'Task Status ID', prop: 'id' },
    { name: 'Task Status Name', prop: 'name' },
    { name: 'Description', prop: 'description' },
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
        this.getTaskStatuses();
      }
    });
    this.getTaskStatuses();
  }

  getTaskStatuses(search: string = '') {
    this.apiClient
      .get('task_status', {
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
    this.getTaskStatuses();
  }

  updatePerPage(event: any) {
    this.page.perPage = event.target.value;
    this.getTaskStatuses();
  }

  getTotalPages(): number {
    return Math.ceil(this.page.total / this.page.perPage);
  }

  onResetFilters() {
    this.filterForm.controls['name'].setValue(null);
    this.getTaskStatuses();
  }
  onApplyFilters() {
    this.getTaskStatuses(this.filterForm.controls['name'].value);
  }

  addNewTaskStatus() {
    this.router.navigateByUrl(`/tasks-status/add`);
  }

  editTaskStatus(row: any): void {
    this.router.navigateByUrl(`/tasks-status/edit/${row.id}`, {
      state: { row },
    });
  }

  onDeleteTaskStatus(row: any): void {
    this.showAlert(
      'warning',
      'Delete Task Status?',
      'Do you really want to delete this TaskStatus.',
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
        this.deleteTaskStatus(id);
      }
    });
  }

  deleteTaskStatus(id: number) {
    this.apiClient
      .post(`task_status/delete/${id}`)
      .toPromise()
      .then((resp) => {
        this.toastr.success('TaskStatus Deleted successfully!', 'Success');
        this.getTaskStatuses();
      })
      .catch((err) => {
        this.toastr.error(err.error.message, 'Error');
      });
  }

  onCheckboxChange(event: Event, row: any) {
    console.log('Event and row', event, row);
  }
}
