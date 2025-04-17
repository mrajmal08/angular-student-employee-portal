import { Component, OnInit } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Location } from '@angular/common';
import { ApiClientService } from 'shared/services/api-client.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-users-form',
  templateUrl: './users-form.component.html',
  styleUrls: ['./users-form.component.scss'],
})
export class UsersFormComponent implements OnInit {
  userForm!: FormGroup;

  displayValidation = true;
  dataForEdit: any;

  constructor(
    private fb: FormBuilder,
    private location: Location,
    private apiClient: ApiClientService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.userForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone_no: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]],
      password: ['', Validators.required],
      password_confirmation: ['', Validators.required],
    });
    // this.agentForm.get('email')?.setValue('');

    this.dataForEdit = history.state;
    if (!!this.dataForEdit.row) {
      this.userForm.patchValue({
        name: this.dataForEdit.row.name,
        email: this.dataForEdit.row.email,
        phone_no: this.dataForEdit.row.phone_no,
      });
      this.clearValidators(this.userForm.get('password') as FormControl);
      this.clearValidators(
        this.userForm.get('password_confirmation') as FormControl
      );
    }
  }

  clearValidators(control: FormControl) {
    control?.clearValidators(); // Remove all validators
    control?.updateValueAndValidity(); // Update the form control validity
    control?.reset();
  }

  onFileChange(event: any, field: string) {
    if (event.target.files.length > 0) {
      this.userForm.patchValue({ [field]: event.target.files[0] });
    }
  }

  onSubmit() {
    if (this.userForm.valid) {
      if (!!this.dataForEdit.row) {
        this.apiClient
          .post(
            `user/update?id=${this.dataForEdit.row.id}&name=${this.userForm.controls['name'].value}&email=${this.userForm.controls['email'].value}&phone_no=${this.userForm.controls['phone_no'].value}&password=${this.userForm.controls['password'].value}&password_confirmation=${this.userForm.controls['password_confirmation'].value}`
          )
          .subscribe((resp: any) => {
            if (resp.status) {
              this.location.back();
            } else {
            }
          });
      } else {
        this.apiClient
          .post(
            `user/insert?name=${this.userForm.controls['name'].value}&email=${this.userForm.controls['email'].value}&phone_no=${this.userForm.controls['phone_no'].value}&password=${this.userForm.controls['password'].value}&password_confirmation=${this.userForm.controls['password_confirmation'].value}`
          )
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

  closeForm() {
    this.location.back();
  }

  getErrorMessageFromResponse(resp: any): string {
    const firstKey = Object.keys(resp.error)[0];
    const firstErrorMessage = resp.error[firstKey][0];
    return firstErrorMessage;
  }
}
