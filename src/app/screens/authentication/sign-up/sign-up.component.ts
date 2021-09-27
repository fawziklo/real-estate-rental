import { AuthSharedService } from './../auth-shared-service/auth.shared.service';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ILogin } from 'src/app/core/models/login';
import { AuthenticationService } from 'src/app/core/services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  loginForm: FormGroup;
  hide = true;

  @Output() signUpLink = new EventEmitter<Boolean>();

  constructor(
    private fb: FormBuilder,
    private authService: AuthenticationService,
    private authSharedService: AuthSharedService,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      fullName: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    })

  }


  public emailErrorMessage(): string {
    return this.authSharedService.emailErrorMessage(this.loginForm)
  }

  public fullNameErrorMessage(): string {
    return this.authSharedService.fullNameErrorMessage(this.loginForm)
  }

  public passWordErrorMessage(): string {
    return this.authSharedService.passWordErrorMessage(this.loginForm)
  }

  public signUpLinkisPressed(){
    this.signUpLink.emit(true);
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
