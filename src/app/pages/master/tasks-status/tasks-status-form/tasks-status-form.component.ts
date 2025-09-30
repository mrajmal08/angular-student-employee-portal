import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Location } from '@angular/common';
import { ApiClientService } from 'shared/services/api-client.service';

@Component({
  selector: 'app-tasks-type-form',
  templateUrl: './tasks-status-form.component.html',
  styleUrls: ['./tasks-status-form.component.scss'],
})
export class TasksStatusFormComponent implements OnInit {
  taskStatusForm!: FormGroup;

  displayValidation = true;

  dataForEdit: any;

  constructor(
    private fb: FormBuilder,
    private location: Location,
    private apiClient: ApiClientService
  ) {}

  ngOnInit(): void {
    this.taskStatusForm = this.fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
    });

    this.dataForEdit = history.state;
    if (!!this.dataForEdit.row) {
      this.taskStatusForm.patchValue({
        name: this.dataForEdit.row.name,
        description: this.dataForEdit.row.description,
      });
    }
  }

  onSubmit() {
    if (this.taskStatusForm.valid) {
      if (!!this.dataForEdit.row) {
        this.apiClient
          .post(
            `task_status/update?id=${this.dataForEdit.row.id}&name=${this.taskStatusForm.controls['name'].value}&description=${this.taskStatusForm.controls['description'].value}`
          )
          .subscribe((resp: any) => {
            if (resp.status) {
              this.location.back();
            }
          });
      } else {
        this.apiClient
          .post(
            `task_status/insert?name=${this.taskStatusForm.controls['name'].value}&description=${this.taskStatusForm.controls['description'].value}`
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
