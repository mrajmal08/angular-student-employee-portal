import {
  Component,
  ElementRef,
  EventEmitter,
  HostListener,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { convertTo24HourWithSeconds } from 'shared/helpers/common-helper';
import { ApiClientService } from 'shared/services/api-client.service';
import { AppService } from 'shared/services/app-service.service';

@Component({
  selector: 'app-add-interviewer-name-dialog',
  templateUrl: './add-interviewer-name-dialog.component.html',
  styleUrls: ['./add-interviewer-name-dialog.component.scss'],
})
export class AddInterviewerNameDialogComponent implements OnInit {
  agentForm!: FormGroup;
  @Input() isCompliance: boolean = false;
  constructor(public activeModal: NgbActiveModal, private fb: FormBuilder) {}
  ngOnInit(): void {
    this.agentForm = this.fb.group({
      interviewer_name: [''],
      interview_date: [''],
    });
  }

  startTime: string = '';
  endTime: string = '';

  @ViewChild('container') containerRef!: ElementRef;

  closeForm() {
    this.activeModal.close();
  }

  onSave() {
    const keyName = this.isCompliance
      ? 'compliance_interviewer_name'
      : 'interviewer_name';
    const keyDate = this.isCompliance
      ? 'compliance_interview_date'
      : 'interview_date';
    this.activeModal.close({
      [keyName]: this.agentForm.get('interviewer_name')?.value,
      [keyDate]: this.agentForm.get('interview_date')?.value,
    });
  }
}
