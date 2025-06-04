import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ConfirmDialogComponent } from 'shared/dialogs/confirm-dialog/confirm-dialog.component';
import { Interview } from 'shared/models/interview-model';
import { ApiClientService } from 'shared/services/api-client.service';
import { AppService } from 'shared/services/app-service.service';
import { AddTimeSlotComponent } from '../../add-time-slot/add-time-slot.component';
import { AddTimeSlotDialogComponent } from '../../add-time-slot-dialog/add-time-slot-dialog.component';
import { convertTo12Hour } from 'shared/helpers/common-helper';
import { AddInterviewerNameDialogComponent } from '../../add-interviewer-name-dialog/add-interviewer-name-dialog.component';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-created-interview',
  templateUrl: './created-interview.component.html',
  styleUrls: ['./created-interview.component.scss'],
})
export class CreatedInterviewComponent implements OnInit {
  @ViewChild('designationSelect', { read: ElementRef })
  designationSelectRef!: ElementRef;
  userForm!: FormGroup;
  caseId: number | null = null;
  selectedRow: any = null;

  btnTitle: string = 'Shuffle By TimeSlots';

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

  onCheckboxChange(event: any, row: any) {
    console.log('Checkbox changed:', event, row);
    if (event.target.checked) {
      this.btnTitle = 'Update Interview';
      this.selectedRow = row;
    } else {
      this.selectedRow = null;
      this.btnTitle = 'Shuffle By TimeSlots';
    }

    this.cdRef.detectChanges(); //
  }

  rows: Interview[] = [];
  columns = [
    { name: 'Interview ID', prop: 'id' },
    { name: 'Case ID', prop: 'case_id' },

    { name: 'Status Name', prop: 'status.name' },
    { name: 'Time Slots', prop: '' },
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
    private modalService: NgbModal,
    private cdRef: ChangeDetectorRef,
    private location: Location,

    private router: Router
  ) {}

  ngOnInit(): void {
    this.userForm = this.fb.group({});
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
          .filter((row: any) => row.is_scheduled === 1 && row.status_id === 1)
          .map((row: { created_at: string; updated_at: string }) => ({
            ...row,
            // created_at: getUKFormatedDate(row.created_at),
          }));

        this.page.total = this.rows.length;

        console.log('Interviews:', this.rows);
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

  onTimeSlotClick(row: any) {
    if (row.start_time && row.end_time) {
      return;
    }
    this.openTimeSlotDialog(row);
  }

  openTimeSlotDialog(row: any) {
    const modelRef = this.modalService.open(AddTimeSlotDialogComponent, {
      size: 'lg',
      centered: true,
      backdrop: 'static',
      windowClass: 'custom-modal',
    });

    modelRef.result.then((result) => {
      if (result) {
        this.updateInterview(row, result);
      }
    });
  }

  getTimeSlots(row: any): string {
    return (
      convertTo12Hour(row.start_time) + ' - ' + convertTo12Hour(row.end_time)
    );
  }

  onBtnClick() {
    if (this.btnTitle !== 'Shuffle By TimeSlots') {
      const modelRef = this.modalService.open(
        AddInterviewerNameDialogComponent,
        {
          size: 'lg',
          centered: true,
          backdrop: 'static',
          windowClass: 'custom-modal',
        }
      );

      modelRef.result.then((result) => {
        if (result) {
          console.log('Sata:', result);

          this.updateInterview(this.selectedRow, result);
        }
      });
    }
  }
}
