import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from 'shared/dialogs/confirm-dialog/confirm-dialog.component';
import { Interview } from 'shared/models/interview-model';
import { ApiClientService } from 'shared/services/api-client.service';
import { AppService } from 'shared/services/app-service.service';

@Component({
  selector: 'app-scheduler',
  templateUrl: './scheduler.component.html',
  styleUrls: ['./scheduler.component.scss'],
})
export class SchedulerComponent implements OnInit {
  userForm!: FormGroup;
  caseId: number | null = null;

  tabs = [
    { label: 'Created Interviews', count: 1 },
    { label: 'Scheduled Interviews', count: 1 },
    { label: 'Completed Interviews', count: 1 },
    { label: 'Compliance Created Interviews', count: 0 },
    { label: 'Compliance Scheduled Interviews', count: 0 },
    { label: 'Compliance Completed Interviews', count: 0 },
  ];

  activeTabIndex = 0;
  constructor() {}

  ngOnInit(): void {}
}
