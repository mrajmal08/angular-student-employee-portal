import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Location } from '@angular/common';
import { ApiClientService } from 'shared/services/api-client.service';

@Component({
  selector: 'app-tasks-type-form',
  templateUrl: './tasks-type-form.component.html',
  styleUrls: ['./tasks-type-form.component.scss'],
})
export class TasksTypeFormComponent implements OnInit {
  taskTypeForm!: FormGroup;

  displayValidation = true;

  dataForEdit: any;

  constructor(
    private fb: FormBuilder,
    private location: Location,
    private apiClient: ApiClientService
  ) {}

  ngOnInit(): void {
    this.taskTypeForm = this.fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
    });

    this.dataForEdit = history.state;
    if (!!this.dataForEdit.row) {
      this.taskTypeForm.patchValue({
        name: this.dataForEdit.row.name,
        description: this.dataForEdit.row.description,
      });
    }
  }

  onFileChange(event: any, field: string) {
    if (event.target.files.length > 0) {
      this.taskTypeForm.patchValue({ [field]: event.target.files[0] });
    }
  }

  onSubmit() {
    if (this.taskTypeForm.valid) {
      if (!!this.dataForEdit.row) {
        this.apiClient
          .post(
            `task_type/update?id=${this.dataForEdit.row.id}&name=${this.taskTypeForm.controls['name'].value}&description=${this.taskTypeForm.controls['description'].value}`
          )
          .subscribe((resp: any) => {
            if (resp.status) {
              this.location.back();
            }
          });
      } else {
        this.apiClient
          .post(
            `task_type/insert?name=${this.taskTypeForm.controls['name'].value}&description=${this.taskTypeForm.controls['description'].value}`
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
