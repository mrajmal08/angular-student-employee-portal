import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
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
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }
  ngOnInit(): void {
    this.apiClient
      .login('login', { username: 'Ali', password: '1234' })
      .subscribe((resp) => {
        console.log('Login Called response', resp);
      });
  }

  get f() {
    return this.loginForm.controls;
  }

  onSubmit() {
    if (this.loginForm.valid) {
      console.log('Form Submitted', this.loginForm.value);
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
      .subscribe((resp) => {
        // this.router.navigateByUrl('/', { replaceUrl: true });
        this.router.navigate(['/dashboard']);
        console.log('Login Resppp', resp);
      });
  }
}
