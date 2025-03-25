import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiClientService } from 'shared/services/api-client.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent  implements OnInit{

  loginForm: FormGroup;

  constructor(private fb: FormBuilder,private apiClient:ApiClientService) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });
  }
  ngOnInit(): void {
   this.apiClient.post('login',{'username':'Ali','password':'1234'}).subscribe((resp)=>{
    console.log('Login Called response',resp)
   })
  }

  get f() {
    return this.loginForm.controls;
  }



  onSubmit() {
    if (this.loginForm.valid) {
      console.log('Form Submitted', this.loginForm.value);
    }
  }

}
