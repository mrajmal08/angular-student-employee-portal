import {
  Component,
  ElementRef,
  EventEmitter,
  HostListener,
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
    console.log('Time Slot Saved:', {
      startTime: this.startTime,
      endTime: this.endTime,
    });

    this.activeModal.close({
      interviewer_name: this.agentForm.get('interviewer_name')?.value,
      interview_date: this.agentForm.get('interview_date')?.value,
    });
  }
}
