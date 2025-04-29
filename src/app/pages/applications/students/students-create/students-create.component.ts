import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Location } from '@angular/common';
import { ApiClientService } from 'shared/services/api-client.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-students-create',
  templateUrl: './students-create.component.html',
  styleUrls: ['./students-create.component.scss'],
})
export class StudentsCreateComponent implements OnInit {
  studentForm: FormGroup;
  displayValidation = true;
  dataForEdit: any;

  constructor(
    private fb: FormBuilder,
    private location: Location,
    private apiClient: ApiClientService,
    private toastr: ToastrService
  ) {
    this.studentForm = this.fb.group({
      name: ['', [Validators.required]],
      surname: ['', [Validators.required]],
      email: ['', Validators.required],
      nationality: ['', [Validators.required]],
      date_of_birth: ['', Validators.required],
      place_of_birth: ['', [Validators.required]],
      passport_start_date: ['', [Validators.required]],
      passport_expiry_date: ['', [Validators.required]],
      passport_status: ['', Validators.required],
      phone_no: ['', Validators.required],
      gender: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.dataForEdit = history.state;
    if (!!this.dataForEdit.row) {
      this.studentForm.patchValue({
        name: this.dataForEdit.row.name,
        surname: this.dataForEdit.row.surname,
        email: this.dataForEdit.row.email,
        nationality: this.dataForEdit.row.nationality,
        date_of_birth: this.dataForEdit.row.date_of_birth,
        place_of_birth: this.dataForEdit.row.place_of_birth,
        passport_start_date: this.dataForEdit.row.passport_start_date,
        passport_expiry_date: this.dataForEdit.row.passport_expiry_date,
        passport_status: this.dataForEdit.row.passport_status,
        phone_no: this.dataForEdit.row.phone_no,
        gender: this.dataForEdit.row.gender,
      });
    }
  }

  onSubmit() {
    if (this.studentForm.valid) {
      if (!!this.dataForEdit.row) {
        const queryParams = new URLSearchParams({
          id: this.dataForEdit.row.id,
          ...this.studentForm.value,
        }).toString();
        this.apiClient
          .post(`student/update?${queryParams}`)
          .subscribe((resp: any) => {
            if (resp.status) {
              this.location.back();
            } else {
            }
          });
      } else {
        const queryParams = new URLSearchParams({
          ...this.studentForm.value,
        }).toString();
        this.apiClient
          .post(`student/insert?${queryParams}`)
          .toPromise()
          .then((resp: any) => {
            if (resp.status) {
              this.location.back();
            }
          })
          .catch((error: any) => {
            console.log('Error:', error);

            this.toastr.error(
              `<span title="${this.getErrorMessageFromResponse(
                error.error
              )}">${this.getErrorMessageFromResponse(error.error)}</span>`,
              'Error',
              { enableHtml: true }
            );
          })
          .catch((error: any) => {});
      }
    } else {
      console.log('Form is invalid');
    }
  }

  getErrorMessageFromResponse(resp: any): string {
    const firstKey = Object.keys(resp.error)[0];
    const firstErrorMessage = resp.error[firstKey][0];
    return firstErrorMessage;
  }

  closeForm() {
    this.location.back();
  }
}
