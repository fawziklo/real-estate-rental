import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ILogin } from '../../../core/login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  hide = true;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    })

  }

  emailErrorMessage() {
    if (this.loginForm.get('email').hasError('required')) {
      return 'You must enter a value';
    }

    return this.loginForm.get('email').hasError('email') ? 'Not a valid email' : '';
  }

  passWordErrorMessage() {
    if (this.loginForm.get('password').hasError('required')) {
      return 'You must enter a password';
    }

    return this.loginForm.get('password').hasError('password') ? 'Not a valid password' : '';
  }

  submitLoginForm() {
    let loginData: ILogin = {
      email: this.loginForm.get('email').value,
      password: this.loginForm.get('password').value
    }
    console.log(loginData)
  }

}
