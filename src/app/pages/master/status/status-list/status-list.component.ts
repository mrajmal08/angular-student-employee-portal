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
import { getUKFormatedDate } from 'shared/helpers/common-helper';
import { ConfirmDialogComponent } from 'shared/dialogs/confirm-dialog/confirm-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { Status } from 'shared/models/status-model';

@Component({
  selector: 'app-status-list',
  templateUrl: './status-list.component.html',
  styleUrls: ['./status-list.component.scss'],
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
export class StatusListComponent implements OnInit {
  page = {
    perPage: 10,
    page: 1,
    total: 0,
  };
  perPageOptions = [10, 25, 50, 100];

  // isCollapsed = true;      veriable for collapsed animation for filters (Unused currently)
  filterForm!: FormGroup;

  columns = [
    { name: 'Status ID', prop: 'id' },
    { name: 'Status Name', prop: 'name' },
    { name: 'Status Description', prop: 'description' },
    { name: 'Created At', prop: 'created_at' },
    { name: 'Created By', prop: 'created_by' },
    { name: 'Updated By', prop: 'updated_by' },
  ];

  rows: Status[] = [];
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
        this.getStatuses(value);
      }
    });
    this.getStatuses();
  }

  getStatuses(search: string = '') {
    this.apiClient
      .get('status', {
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
      description: [''],
    });
  }

  setPage(pageInfo: any) {
    this.page.page = pageInfo.offset + 1;
    this.getStatuses();
  }

  updatePerPage(event: any) {
    this.page.perPage = event.target.value;
    this.getStatuses();
  }

  getTotalPages(): number {
    return Math.ceil(this.page.total / this.page.perPage);
  }

  onResetFilters() {
    this.filterForm.controls['name'].setValue(null);
    this.getStatuses();
  }

  onApplyFilters() {
    this.getStatuses(this.filterForm.controls['name'].value);
  }

  addNewStatus() {
    this.router.navigateByUrl(`/status/add`);
  }

  editStatus(row: any): void {
    console.log('Edit Status:', row);
    this.router.navigateByUrl(`/status/edit/${row.id}`, { state: { row } });
  }

  onDeleteStatus(row: any): void {
    if (confirm('Are you sure you want to delete this status?')) {
      this.deleteStatus(row.id);
    }
  }

  deleteStatus(id: number) {
    this.apiClient
      .get(`status/delete/${id}`)
      .toPromise()
      .then((resp) => {
        this.toastr.success('Status Deleted successfully!', 'Success');
        this.getStatuses();
      })
      .catch((err) => {
        this.showAlert('error', err.error.message);
      });
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
}
