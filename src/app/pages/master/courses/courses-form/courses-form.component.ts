import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Location } from '@angular/common';
import { ApiClientService } from 'shared/services/api-client.service';

@Component({
  selector: 'app-courses-form',
  templateUrl: './courses-form.component.html',
  styleUrls: ['./courses-form.component.scss'],
})
export class CoursesFormComponent implements OnInit {
  agentForm!: FormGroup;

  displayValidation = true;

  dataForEdit: any;

  constructor(
    private fb: FormBuilder,
    private location: Location,
    private apiClient: ApiClientService
  ) {}

  ngOnInit(): void {
    this.agentForm = this.fb.group({
      name: ['', Validators.required],
    });

    this.dataForEdit = history.state;
    if (!!this.dataForEdit.row) {
      this.agentForm.patchValue({
        name: this.dataForEdit.row.name,
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
            `course/update?id=${this.dataForEdit.row.id}&name=${this.agentForm.controls['name'].value}`
          )
          .subscribe((resp: any) => {
            if (resp.status) {
              this.location.back();
            }
          });
      } else {
        this.apiClient
          .post(`course/insert?name=${this.agentForm.controls['name'].value}`)
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
