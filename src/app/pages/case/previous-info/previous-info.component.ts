import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from 'shared/dialogs/confirm-dialog/confirm-dialog.component';
import { Interview } from 'shared/models/interview-model';
import { ApiClientService } from 'shared/services/api-client.service';
import { AppService } from 'shared/services/app-service.service';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-previous-info',
  templateUrl: './previous-info.component.html',
  styleUrls: ['./previous-info.component.scss'],
})
export class PreviousInfoComponent implements OnInit {
  @ViewChild('designationSelect', { read: ElementRef })
  designationSelectRef!: ElementRef;
  userForm!: FormGroup;
  caseId: number | null = null;

  addingInterview: boolean = false;
  studentNotified: any[] = [
    { id: 'yes', name: 'Yes' },
    { id: 'no', name: 'No' },
  ];

  onDesignationChange(selected: any) {
    setTimeout(() => {
      const input: HTMLInputElement | null =
        this.designationSelectRef.nativeElement.querySelector('input');
      if (input) {
        input.blur();
      }
    }, 0);
  }

  onCancel() {
    this.addingInterview = false;
  }
  onAdd() {
    console.log('form value', this.userForm.value);
    this.addInterview();
    this.addingInterview = false;
  }

  onCheckboxChange(event: Event, row: any) {}
  addNewInterview() {
    this.addingInterview = true;
  }

  rows: Interview[] = [];
  columns = [
    { name: 'Interview ID', prop: 'id' },
    { name: 'Case ID', prop: 'case_id' },

    { name: 'Status Name', prop: 'status.name' },
    // { name: 'User Email', prop: 'email' },
    // { name: 'Phone No', prop: 'phone_no' },
    // { name: 'DOB', prop: 'date_of_birth' },
    // { name: 'Role', prop: 'role.name' },
    // { name: 'Designation', prop: 'designation.name' },
    // { name: 'Department', prop: 'department.name' },
    // { name: 'Status', prop: 'status' },
    { name: 'Created By', prop: 'created_by' },
    { name: 'Updated By', prop: 'updated_by' },
  ];

  page = {
    perPage: 10,
    page: 1,
    total: 100,
  };
  perPageOptions = [10, 25, 50, 100];

  constructor(
    private apiClient: ApiClientService,
    private fb: FormBuilder,
    private appService: AppService,
    private dialog: MatDialog,

    private location: Location,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.userForm = this.fb.group({
      referral_date: [''],
      student_notified: [''],
    });
    this.appService.breadCrumbData$.subscribe((data) => {
      this.caseId = data.caseId ?? null;
    });

    this.getInterviews();
  }

  setPage(pageInfo: any) {
    this.page.page = pageInfo.offset + 1;
  }

  editUser(row: any): void {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      width: '400px',
      panelClass: 'custom-dialog-container',
      position: { top: '50%', left: '50%' },
      data: {
        type: 'warning',
        title: 'Update Interview?',
        message: 'Are you sure you want to update.',
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.updateInterview(row);
      } else {
      }
    });
  }

  onDeleteUser(row: any): void {}

  getInterviews() {
    this.apiClient
      .get('interview', {
        pagination: 1,
        page: this.page.page,
        per_page: this.page.perPage,
      })
      .subscribe((resp: any) => {
        this.page.total = resp.result.total;
        this.rows = resp.result.data
          .filter((row: any) => row.is_scheduled === 0)
          .map((row: { created_at: string; updated_at: string }) => ({
            ...row,
            // created_at: getUKFormatedDate(row.created_at),
          }));
        this.page.total = this.rows.length;
      });
  }

  updateInterview(row: any) {
    this.apiClient
      .post('interview/update', {
        case_id: row.case_id,
        id: row.id,
        is_scheduled: 1,
      })
      .subscribe((resp: any) => {
        if (resp.status) {
          this.getInterviews();
        }
      });
  }

  addInterview() {
    const queryParams = new URLSearchParams({
      case_id: this.caseId,
      ...this.userForm.value,
    }).toString();
    this.apiClient
      .post(`interview/insert?${queryParams}`)
      .subscribe((resp: any) => {
        this.getInterviews();
      });
  }

  updatePerPage(event: any) {
    this.page.perPage = event.target.value;
    this.getInterviews();
  }

  onPrevious() {
    this.location.back();
  }

  onNext() {
    let url = '/case/add';
    this.router.navigateByUrl(url + '/scheduler');
  }
}
