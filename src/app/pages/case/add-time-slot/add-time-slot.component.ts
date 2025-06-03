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
import { ApiClientService } from 'shared/services/api-client.service';
import { AppService } from 'shared/services/app-service.service';

@Component({
  selector: 'app-add-time-slot',
  templateUrl: './add-time-slot.component.html',
  styleUrls: ['./add-time-slot.component.scss'],
})
export class AddTimeSlotComponent implements OnInit {
  @Input() title: string | null = null;

  constructor(public activeModal: NgbActiveModal) {}
  ngOnInit(): void {}
  hours = Array.from({ length: 12 }, (_, i) =>
    (i + 1).toString().padStart(2, '0')
  );
  minutes = Array.from({ length: 60 }, (_, i) => i.toString().padStart(2, '0'));
  meridiems = ['AM', 'PM'];

  selectedHour = '12';
  selectedMinute = '00';
  selectedMeridiem = 'AM';

  showDropdown = false;
  selectedTime = '';

  @Output() timeChange = new EventEmitter<string>();
  @ViewChild('container') containerRef!: ElementRef;

  toggleDropdown() {
    this.showDropdown = !this.showDropdown;
  }

  onTimeSelect() {
    this.selectedTime = `${this.selectedHour}:${this.selectedMinute} ${this.selectedMeridiem}`;
    this.timeChange.emit(this.selectedTime);
    this.showDropdown = false;
  }

  @HostListener('document:click', ['$event'])
  onClickOutside(event: MouseEvent) {
    if (
      this.containerRef &&
      !this.containerRef.nativeElement.contains(event.target)
    ) {
      this.showDropdown = false;
    }
  }

  closeForm() {
    this.activeModal.close();
  }
}
