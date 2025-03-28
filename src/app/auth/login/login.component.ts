import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ConfirmDialogComponent } from 'shared/dialogs/confirm-dialog/confirm-dialog.component';
import { ApiClientService } from 'shared/services/api-client.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private apiClient: ApiClientService,
    private router: Router,
    private toastr: ToastrService,
    private dialog: MatDialog
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }
  ngOnInit(): void {}

  get f() {
    return this.loginForm.controls;
  }

  onSubmit() {
    if (this.loginForm.valid) {
      this.login();
    }
  }
  login() {
    let payload = {
      email: this.loginForm.controls['email'],
      password: this.loginForm.controls['password'],
    };
    this.apiClient
      .login('login', JSON.stringify(this.loginForm.value))
      .toPromise()
      .then((resp) => {
        this.toastr.success('User Logged In successfully!', 'Success');
        this.router.navigate(['/dashboard']);
      })
      .catch((err) => {
        this.showError(err.error.message);
      });
  }

  showError(msg: string) {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      width: '400px',
      panelClass: 'custom-dialog-container',
      position: { top: '50%', left: '50%' },
      data: { message: msg, type: 'error' },
    });

    dialogRef.afterClosed().subscribe((result) => {});
  }
}
