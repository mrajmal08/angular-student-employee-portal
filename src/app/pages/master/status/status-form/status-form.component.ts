import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiClientService } from 'shared/services/api-client.service';

@Component({
  selector: 'app-status-form',
  templateUrl: './status-form.component.html',
  styleUrls: ['./status-form.component.scss'],
})
export class StatusFormComponent implements OnInit {
  agentForm!: FormGroup;
  dataForEdit: any;

  displayValidation = true;

  constructor(
    private fb: FormBuilder,
    private location: Location,
    private apiClient: ApiClientService
  ) {}

  ngOnInit(): void {
    this.agentForm = this.fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
    });

    this.dataForEdit = history.state;
    if (!!this.dataForEdit.row) {
      this.agentForm.patchValue({
        name: this.dataForEdit.row.name,
        description: this.dataForEdit.row.description,
      });
    }
  }

  onFileChange(event: any, field: string) {
    if (event.target.files.length > 0) {
      this.agentForm.patchValue({ [field]: event.target.files[0] });
    }
  }

  onSubmit() {
    if (this.agentForm.valid) {
      if (!!this.dataForEdit.row) {
        this.apiClient
          .post(
            `status/update?id=${this.dataForEdit.row.id}&name=${this.agentForm.controls['name'].value}&description=${this.agentForm.controls['description'].value}`
          )
          .subscribe((resp: any) => {
            if (resp.status) {
              this.location.back();
            }
          });
      } else {
        this.apiClient
          .post(
            `status/insert?name=${this.agentForm.controls['name'].value}&description=${this.agentForm.controls['description'].value}`
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
