import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ILogin } from '../../../core/models/login';
import { AuthenticationService } from './../../../core/services/authentication.service';
import { AuthSharedService } from './../auth-shared-service/auth.shared.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public loginForm: FormGroup;
  public hide = true;

  @Output() public loginLink = new EventEmitter<Boolean>();


  constructor(
    private fb: FormBuilder,
    private authService: AuthenticationService,
    private authSharedService: AuthSharedService,
    private router: Router
  ) { }

  public ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    })

  }

  public emailErrorMessage(): string {
    return this.authSharedService.emailErrorMessage(this.loginForm)
  }

  public passWordErrorMessage(): string {
    return this.authSharedService.passWordErrorMessage(this.loginForm)
  }

  public loginLinkisPressed(){
    this.loginLink.emit(false);
  }

  submitLoginForm() {
    this.router.navigate(["/home"]);

    let loginData: ILogin = {
      email: this.loginForm.get('email').value,
      password: this.loginForm.get('password').value
    }
    console.log(loginData)

    this.authService.sendUserLogin(loginData).subscribe();
  }

}
