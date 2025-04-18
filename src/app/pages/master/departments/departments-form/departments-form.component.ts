import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Location } from '@angular/common';
import { ApiClientService } from 'shared/services/api-client.service';

@Component({
  selector: 'app-departments-form',
  templateUrl: './departments-form.component.html',
  styleUrls: ['./departments-form.component.scss'],
})
export class DepartmentsFormComponent implements OnInit {
  departmentForm!: FormGroup;

  displayValidation = true;

  dataForEdit: any;

  constructor(
    private fb: FormBuilder,
    private location: Location,
    private apiClient: ApiClientService
  ) {}

  ngOnInit(): void {
    this.departmentForm = this.fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
    });

    this.dataForEdit = history.state;
    if (!!this.dataForEdit.row) {
      this.departmentForm.patchValue({
        name: this.dataForEdit.row.name,
        description: this.dataForEdit.row.description,
      });
    }
  }

  onFileChange(event: any, field: string) {
    if (event.target.files.length > 0) {
      this.departmentForm.patchValue({ [field]: event.target.files[0] });
    }
  }

  onSubmit() {
    if (this.departmentForm.valid) {
      if (!!this.dataForEdit.row) {
        this.apiClient
          .post(
            `department/update?id=${this.dataForEdit.row.id}&name=${this.departmentForm.controls['name'].value}&description=${this.departmentForm.controls['description'].value}`
          )
          .subscribe((resp: any) => {
            if (resp.status) {
              this.location.back();
            }
          });
      } else {
        this.apiClient
          .post(
            `department/insert?name=${this.departmentForm.controls['name'].value}&description=${this.departmentForm.controls['description'].value}`
          )
          .subscribe((resp: any) => {
            if (resp.status) {
              this.location.back();
            }
          });
      }
    } else {
    }
  }

  closeForm() {
    this.location.back();
  }
}
