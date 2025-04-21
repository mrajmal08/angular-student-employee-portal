import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Location } from '@angular/common';
import { ApiClientService } from 'shared/services/api-client.service';

@Component({
  selector: 'app-designations-form',
  templateUrl: './designations-form.component.html',
  styleUrls: ['./designations-form.component.scss'],
})
export class DesignationsFormComponent implements OnInit {
  designationForm!: FormGroup;

  displayValidation = true;

  dataForEdit: any;

  constructor(
    private fb: FormBuilder,
    private location: Location,
    private apiClient: ApiClientService
  ) {}

  ngOnInit(): void {
    this.designationForm = this.fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
    });

    this.dataForEdit = history.state;
    if (!!this.dataForEdit.row) {
      this.designationForm.patchValue({
        name: this.dataForEdit.row.name,
        description: this.dataForEdit.row.description,
      });
    }
  }

  onFileChange(event: any, field: string) {
    if (event.target.files.length > 0) {
      this.designationForm.patchValue({ [field]: event.target.files[0] });
    }
  }

  onSubmit() {
    if (this.designationForm.valid) {
      if (!!this.dataForEdit.row) {
        this.apiClient
          .post(
            `designation/update?id=${this.dataForEdit.row.id}&name=${this.designationForm.controls['name'].value}&description=${this.designationForm.controls['description'].value}`
          )
          .subscribe((resp: any) => {
            if (resp.status) {
              this.location.back();
            }
          });
      } else {
        this.apiClient
          .post(
            `designation/insert?name=${this.designationForm.controls['name'].value}&description=${this.designationForm.controls['description'].value}`
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
