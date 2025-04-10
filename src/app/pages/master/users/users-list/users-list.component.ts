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
import { User } from 'shared/models/user-model';
import { getUKFormatedDate } from 'shared/helpers/common-helper';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from 'shared/dialogs/confirm-dialog/confirm-dialog.component';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss'],
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
export class UsersListComponent implements OnInit {
  page = {
    perPage: 25,
    page: 1,
    total: 100,
  };
  perPageOptions = [10, 25, 50, 100];

  isCollapsed = true;
  filterForm!: FormGroup;

  name: string = '';
  email: string = '';
  phone_no: string = '';

  columns = [
    { name: 'User ID', prop: 'id' },
    { name: 'User Name', prop: 'name' },
    { name: 'User Mobile', prop: 'phone_no' },
    { name: 'User Email', prop: 'email' },
    { name: 'Created At', prop: 'created_at' },
    { name: 'Created By', prop: 'createdBy' },
    { name: 'Updated By', prop: 'updatedBy' },
    { name: 'Status', prop: 'status' },
  ];

  rows: User[] = [];
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private apiClient: ApiClientService,
    private dialog: MatDialog,
    private toastr: ToastrService
  ) {
    this.buildForm();
  }

  ngOnInit(): void {
    this.filterForm.controls['name'].valueChanges.subscribe((value) => {
      if (value === '') {
        this.clearFilterValues();
        this.getUsers();
      } else if (!!value) {
        this.filterForm.controls['email'].setValue(null);
        this.filterForm.controls['phone_no'].setValue(null);
      }
    });

    this.filterForm.controls['email'].valueChanges.subscribe((value) => {
      if (value === '') {
        this.clearFilterValues();
        this.getUsers();
      } else if (!!value) {
        this.filterForm.controls['name'].setValue(null);
        this.filterForm.controls['phone_no'].setValue(null);
      }
    });
    this.filterForm.controls['phone_no'].valueChanges.subscribe((value) => {
      if (value === '') {
        this.clearFilterValues();
        this.getUsers();
      } else if (!!value) {
        this.filterForm.controls['name'].setValue(null);
        this.filterForm.controls['email'].setValue(null);
      }
    });
    this.getUsers();
  }

  getUsers(search: string = '') {
    this.apiClient
      .get('users', {
        pagination: 1,
        page: this.page.page,
        per_page: this.page.perPage,
        name: this.name,
        email: this.email,
        phone_no: this.phone_no,
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

  onApplyFilters() {
    if (!!this.filterForm.controls['name'].value) {
      this.name = this.filterForm.controls['name'].value;
      this.email = '';
      this.phone_no = '';
    } else if (!!this.filterForm.controls['email'].value) {
      this.email = this.filterForm.controls['email'].value;
      this.name = '';
      this.phone_no = '';
    } else if (!!this.filterForm.controls['phone_no'].value) {
      this.phone_no = this.filterForm.controls['phone_no'].value;
      this.name = '';
      this.email = '';
    }
    this.getUsers();
  }

  clearFilterValues() {
    this.name = '';
    this.email = '';
    this.phone_no = '';
  }

  buildForm() {
    this.filterForm = this.fb.group({
      name: [''],
      email: [''],
      phone_no: [''],
    });
  }

  setPage(pageInfo: any) {
    this.page.page = pageInfo.offset + 1;
  }

  updatePerPage(event: any) {
    this.page.perPage = event.target.value;
  }

  getTotalPages(): number {
    return Math.ceil(this.page.total / this.page.perPage);
  }

  onSelectFilters(): void {}

  resetForm() {}

  onResetFilters() {
    this.clearFilterValues();
    this.filterForm.controls['name'].setValue(null);
    this.filterForm.controls['email'].setValue(null);
    this.filterForm.controls['phone_no'].setValue(null);
    this.getUsers();
  }

  onAgentNameClick(agentId: any) {
    this.router.navigateByUrl(`/users/${agentId}`);
  }

  addNewAgent() {
    this.router.navigateByUrl(`/users/add`);
  }

  editUser(row: any): void {
    console.log('Edit Users:', row);
    this.router.navigateByUrl(`/users/edit/${row.id}`, { state: { row } });
    // Implement edit logic (e.g., open a modal, navigate to edit page)
  }

  onDeleteUser(row: any): void {
    this.showAlert(
      'warning',
      'Delete User?',
      'Do you really want to delete this user.',
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
        this.deleteUser(id);
      }
    });
  }

  deleteUser(id: number) {
    this.apiClient
      .get(`user/delete/${id}`)
      .toPromise()
      .then((resp) => {
        this.toastr.success('User Deleted successfully!', 'Success');
        this.getUsers();
      })
      .catch((err) => {
        this.toastr.error(err.error.message, 'Error');
      });
  }

  onStatusToggle(row: any) {
    row.status = row.status === 1 ? 0 : 1;
    this.updateUserStatus(row);
  }

  updateUserStatus(user: User) {
    this.apiClient
      .post(`user/update?id=${user.id}&status=${user.status}`)
      .subscribe((resp: any) => {
        if (resp.status) {
          this.toastr.success(resp.message, 'Success');
        } else {
          this.toastr.error(resp.message, 'Error');
        }
      });
  }
}
