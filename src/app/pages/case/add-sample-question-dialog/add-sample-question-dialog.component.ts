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
  selector: 'app-add-sample-question-dialog',
  templateUrl: './add-sample-question-dialog.component.html',
  styleUrls: ['./add-sample-question-dialog.component.scss'],
})
export class AddSampleQuestionDialogComponent implements OnInit {
  @Input() isCompliance: boolean = false;

  sample_questions_File: File | null = null;
  agentForm!: FormGroup;
  constructor(public activeModal: NgbActiveModal, private fb: FormBuilder) {}
  ngOnInit(): void {
    this.agentForm = this.fb.group({
      sample_questions: [''],
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
      ? 'compliance_sample_questions'
      : 'sample_questions';

    this.activeModal.close({
      [keyName]: this.sample_questions_File,
    });
  }

  onadditionalVisaUploadFile(event: any, controlName: string) {
    this.sample_questions_File = event.target.files[0];
  }
}
