import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from 'shared/dialogs/confirm-dialog/confirm-dialog.component';
import { Interview } from 'shared/models/interview-model';
import { ApiClientService } from 'shared/services/api-client.service';
import { AppService } from 'shared/services/app-service.service';
import { convertTo12Hour } from 'shared/helpers/common-helper';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-completed-interview',
  templateUrl: './completed-interview.component.html',
  styleUrls: ['./completed-interview.component.scss'],
})
export class CompletedInterviewComponent implements OnInit {
  caseId: number | null = null;
  selectedRow: any = null;

  isRowSelected: boolean = false;

  interviewForm!: FormGroup;

  updatingInterview: boolean = false;
  studentNotified: any[] = [
    { id: 'yes', name: 'Yes' },
    { id: 'no', name: 'No' },
  ];

  onCancel() {
    this.updatingInterview = false;
  }
  onUpdate() {
    this.updateInterview(this.selectedRow);
    this.updatingInterview = false;
  }

  onCheckboxChange(event: any, row: any) {
    if (event.target.checked) {
      this.isRowSelected = true;
      this.selectedRow = row;
      this.updatingInterview = true;
    } else {
      this.isRowSelected = false;
      this.selectedRow = null;
      this.updatingInterview = false;
    }
  }

  rows: Interview[] = [];
  columns = [
    { name: 'Interview ID', prop: 'id' },
    { name: 'Case ID', prop: 'case_id' },

    { name: 'Status Name', prop: 'status.name' },
    { name: 'Time Slots', prop: '' },
    { name: 'Interviewer Name', prop: 'interviewer_name' },
    { name: 'Interview Date', prop: 'interview_date' },
    { name: 'Referral Date', prop: 'referral_date' },
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
    private appService: AppService,
    private dialog: MatDialog,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.interviewForm = this.fb.group({
      compliance_referral_date: [''],
      compliance_student_notified: [''],
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

  onDeleteInterview(row: any): void {}

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
          .filter((row: any) => row.is_scheduled === 1 && row.status_id === 3)
          .map((row: { created_at: string; updated_at: string }) => ({
            ...row,
          }));

        this.page.total = this.rows.length;
      });
  }

  updateInterview(row: any) {
    this.apiClient
      .post('interview/update', {
        case_id: row.case_id,
        id: row.id,
        ...this.interviewForm.value,
      })
      .subscribe((resp: any) => {
        if (resp.status) {
          this.getInterviews();
        }
      });
  }

  updatePerPage(event: any) {
    this.page.perPage = event.target.value;
    this.getInterviews();
  }

  onTimeSlotClick(row: any) {
    if (row.start_time && row.end_time) {
      return;
    }
    this.openTimeSlotDialog(row);
  }

  openTimeSlotDialog(row: any) {}

  getTimeSlots(row: any): string {
    return (
      convertTo12Hour(row.start_time) + ' - ' + convertTo12Hour(row.end_time)
    );
  }

  // onBtnClick() {}
}
