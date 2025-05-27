import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ApiClientService } from 'shared/services/api-client.service';

@Component({
  selector: 'app-add-student-dialog',
  templateUrl: './add-student-dialog.component.html',
  styleUrls: ['./add-student-dialog.component.scss'],
})
export class AddStudentDialogComponent implements OnInit {
  displayValidation = true;
  studentForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private apiClient: ApiClientService,
    public activeModal: NgbActiveModal
  ) {}

  ngOnInit(): void {
    this.studentForm = this.fb.group({
      // Student Req Info...
      name: ['', Validators.required],
      surname: ['', Validators.required],
      date_of_birth: ['', Validators.required],
      gender: ['', Validators.required],
      place_of_birth: [''],
      nationality: [''],
      passport_start_date: [''],
      passport_expiry_date: [''],
      passport_status: [''],
      email: ['', Validators.required],
      phone_no: ['', Validators.required],
    });
  }

  closeForm() {
    this.activeModal.close();
  }
  onSubmit() {
    this.displayValidation = false;
    if (this.studentForm.valid) {
      this.addStudent();
    }
  }

  addStudent() {
    const {
      name,
      surname,
      email,
      nationality,
      date_of_birth,
      place_of_birth,
      passport_start_date,
      passport_expiry_date,
      passport_status,
      phone_no,
      gender,
    } = this.studentForm.value;

    const queryParams = new URLSearchParams({
      name,
      surname,
      email,
      nationality,
      date_of_birth,
      place_of_birth,
      passport_start_date,
      passport_expiry_date,
      passport_status,
      phone_no,
      gender,
    }).toString();

    this.apiClient
      .post(`student/insert?${queryParams}`)
      .toPromise()
      .then((resp: any) => {
        if (resp.status) {
          this.activeModal.close({ studentId: resp.result.id });
        }
      })
      .catch((error: any) => {})
      .catch((error: any) => {});
  }
}
