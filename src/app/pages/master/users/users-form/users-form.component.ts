import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
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
import { Department } from 'shared/models/department-model';
import { Designation } from 'shared/models/designation-model';

@Component({
  selector: 'app-users-form',
  templateUrl: './users-form.component.html',
  styleUrls: ['./users-form.component.scss'],
})
export class UsersFormComponent implements OnInit {
  @ViewChild('roleSelect', { read: ElementRef }) roleSelectRef!: ElementRef;
  @ViewChild('departmentSelect', { read: ElementRef })
  departmentSelectRef!: ElementRef;
  @ViewChild('designationSelect', { read: ElementRef })
  designationSelectRef!: ElementRef;

  @ViewChild('sessionSelect', { read: ElementRef })
  sessionSelectRef!: ElementRef;
  userForm!: FormGroup;

  displayValidation = true;
  dataForEdit: any;
  roles: any[] = [];
  departments: Department[] = [];
  designations: Designation[] = [];
  sessions: any[] = [];

  constructor(
    private fb: FormBuilder,
    private location: Location,
    private apiClient: ApiClientService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.userForm = this.fb.group({
      name: ['', Validators.required],
      middle_name: [''],
      surname: [''],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      gender: [''],
      date_of_birth: [''],
      nationality: [''],

      // password_confirmation: ['', Validators.required],
      // phone_no: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]],
      role_id: [null],
      address: [''],
      zipcode: [''],
      city: [''],
      state_id: [null],
      work_phone_no: [''],
      phone_extension: [''],
      phone: [''],
      start_date: [''],
      end_date: [''],
      emergency_phone: [''],
      intake_id: [null],
      designation_id: [null],
      department_id: [null],
      location_id: [null],
      hiring_date: [''],
      employee_type_id: [null],
      // session_id: [null],
      // status: [null],
      agency_name: [null],
      institute_time: [null],
      agent_market_value: [null],
    });

    this.dataForEdit = history.state;
    if (!!this.dataForEdit.row) {
      this.userForm.patchValue({
        name: this.dataForEdit.row.name,
        email: this.dataForEdit.row.email,
        phone_no: this.dataForEdit.row.phone_no,
        role_id: this.dataForEdit.row.role_id,
        department_id: this.dataForEdit.row.department_id,
        designation_id: this.dataForEdit.row.designation_id,
        session_id: this.dataForEdit.row.session_id,

        status: this.dataForEdit.row.status,
        agency_name: this.dataForEdit.row.agency_name,
        institute_time: this.dataForEdit.row.institute_time,
        agent_market_value: this.dataForEdit.row.agent_market_value,
        start_date: this.dataForEdit.row.start_date,
        end_date: this.dataForEdit.row.end_date,
        nationality: this.dataForEdit.row.nationality,
        date_of_birth: this.dataForEdit.row.date_of_birth,
      });
      this.clearValidators(this.userForm.get('password') as FormControl);
      this.clearValidators(
        this.userForm.get('password_confirmation') as FormControl
      );
    }

    this.getRoles();
    this.getDepartments();
    this.getDesignations();
    this.getSessions();
  }

  getRoles() {
    this.apiClient.get('roles', {}).subscribe((resp: any) => {
      this.roles = resp.result.map((dep: any) => ({
        id: dep.id,
        name: dep.name,
      }));

      console.log('roles:', this.roles);
    });
  }
  onRoleChange(selected: any) {
    console.log('Selected role:', selected);

    setTimeout(() => {
      const input: HTMLInputElement | null =
        this.roleSelectRef.nativeElement.querySelector('input');
      if (input) {
        input.blur();
      }
    }, 0);
  }

  getDepartments() {
    this.apiClient.get('departments', {}).subscribe((resp: any) => {
      this.departments = resp.result.map((dep: any) => ({
        id: dep.id,
        name: dep.name,
      }));

      console.log('Departments:', this.departments);
    });
  }
  onDepartmentChange(selected: any) {
    setTimeout(() => {
      const input: HTMLInputElement | null =
        this.departmentSelectRef.nativeElement.querySelector('input');
      if (input) {
        input.blur();
      }
    }, 0);
  }

  getDesignations() {
    this.apiClient.get('designations', {}).subscribe((resp: any) => {
      this.designations = resp.result.map((dep: any) => ({
        id: dep.id,
        name: dep.name,
      }));

      console.log('designations:', this.designations);
    });
  }
  onDesignationChange(selected: any) {
    setTimeout(() => {
      const input: HTMLInputElement | null =
        this.designationSelectRef.nativeElement.querySelector('input');
      if (input) {
        input.blur();
      }
    }, 0);
  }

  getSessions() {
    this.apiClient.get('sessions', {}).subscribe((resp: any) => {
      this.sessions = resp.result.map((dep: any) => ({
        id: dep.id,
        name: dep.name,
      }));

      console.log('designations:', this.designations);
    });
  }
  onSessionChange(selected: any) {
    setTimeout(() => {
      const input: HTMLInputElement | null =
        this.sessionSelectRef.nativeElement.querySelector('input');
      if (input) {
        input.blur();
      }
    }, 0);
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

  // onSubmit() {
  //   if (this.userForm.valid) {
  //     if (!!this.dataForEdit.row) {
  //       this.apiClient
  //         .post(
  //           `user/update?id=${this.dataForEdit.row.id}&name=${this.userForm.controls['name'].value}&email=${this.userForm.controls['email'].value}&phone_no=${this.userForm.controls['phone_no'].value}&password=${this.userForm.controls['password'].value}&password_confirmation=${this.userForm.controls['password_confirmation'].value}`
  //         )
  //         .subscribe((resp: any) => {
  //           if (resp.status) {
  //             this.location.back();
  //           } else {
  //           }
  //         });
  //     } else {
  //       this.apiClient
  //         .post(
  //           `user/insert?name=${this.userForm.controls['name'].value}&email=${this.userForm.controls['email'].value}&phone_no=${this.userForm.controls['phone_no'].value}&password=${this.userForm.controls['password'].value}&password_confirmation=${this.userForm.controls['password_confirmation'].value}`
  //         )
  //         .toPromise()
  //         .then((resp: any) => {
  //           if (resp.status) {
  //             this.location.back();
  //           }
  //         })
  //         .catch((error: any) => {
  //           console.log('Error:', error);

  //           this.toastr.error(
  //             `<span title="${this.getErrorMessageFromResponse(
  //               error.error
  //             )}">${this.getErrorMessageFromResponse(error.error)}</span>`,
  //             'Error',
  //             { enableHtml: true }
  //           );
  //         })
  //         .catch((error: any) => {});
  //     }
  //   } else {
  //     console.log('Form is invalid');
  //   }
  // }

  onSubmit() {
    if (this.userForm.valid) {
      if (!!this.dataForEdit.row) {
        const queryParams = new URLSearchParams({
          id: this.dataForEdit.row.id,
          ...this.userForm.value,
        }).toString();
        this.apiClient
          .post(`user/update?${queryParams}`)
          .subscribe((resp: any) => {
            if (resp.status) {
              this.location.back();
            } else {
            }
          });
      } else {
        const queryParams = new URLSearchParams({
          ...this.userForm.value,
        }).toString();
        this.apiClient
          .post(`user/insert?${queryParams}`)
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

  get IsRecruitmentAgentRole() {
    return this.userForm.get('role_id')?.value === 2;
  }

  // get ShowingDepartment() {
  //   //  Department dropdown for Head of Admissions,Admin support,Compliance support,Head of Registry,Registry Support
  //   return (
  //     this.userForm.get('role_id')?.value === 5 ||
  //     this.userForm.get('role_id')?.value === 6 ||
  //     this.userForm.get('role_id')?.value === 7 ||
  //     this.userForm.get('role_id')?.value === 8 ||
  //     this.userForm.get('role_id')?.value === 9
  //   );
  // }
}
