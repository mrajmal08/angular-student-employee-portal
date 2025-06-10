import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ConfirmDialogComponent } from 'shared/dialogs/confirm-dialog/confirm-dialog.component';
import { Interview } from 'shared/models/interview-model';
import { ApiClientService } from 'shared/services/api-client.service';
import { AppService } from 'shared/services/app-service.service';
import { convertTo12Hour } from 'shared/helpers/common-helper';
import { AddSampleQuestionDialogComponent } from '../../add-sample-question-dialog/add-sample-question-dialog.component';

@Component({
  selector: 'app-scheduler-interview',
  templateUrl: './scheduler-interview.component.html',
  styleUrls: ['./scheduler-interview.component.scss'],
})
export class SchedulerInterviewComponent implements OnInit {
  caseId: number | null = null;
  selectedRow: any = null;

  isRowSelected: boolean = false;

  onCheckboxChange(event: any, row: any) {
    if (event.target.checked) {
      this.isRowSelected = true;
      this.selectedRow = row;
    } else {
      this.isRowSelected = false;
      this.selectedRow = null;
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
    private modalService: NgbModal
  ) {}

  ngOnInit(): void {
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
          .filter((row: any) => row.is_scheduled === 1 && row.status_id === 2)
          .map((row: { created_at: string; updated_at: string }) => ({
            ...row,
          }));

        this.page.total = this.rows.length;
      });
  }

  updateInterview(row: any, result?: any) {
    this.apiClient
      .post('interview/update', {
        case_id: row.case_id,
        id: row.id,
        ...result,
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

  getTimeSlots(row: any): string {
    return (
      convertTo12Hour(row.start_time) + ' - ' + convertTo12Hour(row.end_time)
    );
  }

  onBtnClick() {
    const modelRef = this.modalService.open(AddSampleQuestionDialogComponent, {
      size: 'lg',
      centered: true,
      backdrop: 'static',
      windowClass: 'custom-modal',
    });

    modelRef.result.then((result) => {
      if (result) {
        this.updateInterview(this.selectedRow, result);
      }
    });
  }
}
