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
  selector: 'app-add-time-slot-dialog',
  templateUrl: './add-time-slot-dialog.component.html',
  styleUrls: ['./add-time-slot-dialog.component.scss'],
})
export class AddTimeSlotDialogComponent implements OnInit {
  constructor(public activeModal: NgbActiveModal) {}
  ngOnInit(): void {}

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
      start_time: convertTo24HourWithSeconds(this.startTime),
      end_time: convertTo24HourWithSeconds(this.endTime),
    });
  }
}
