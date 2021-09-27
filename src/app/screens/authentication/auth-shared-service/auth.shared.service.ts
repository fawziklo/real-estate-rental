import { Injectable } from "@angular/core";
import { FormGroup } from "@angular/forms";

@Injectable({
  providedIn: 'root',
})

export class AuthSharedService {

  public emailErrorMessage(loginForm: FormGroup): string {
    if (loginForm.get('email').hasError('required')) {
      return 'You must enter a value';
    }

    return loginForm.get('email').hasError('email') ? 'Not a valid email' : '';
  }

  public passWordErrorMessage(loginForm: FormGroup): string {
    if (loginForm.get('password').hasError('required')) {
      return 'You must enter a password';
    }

    return loginForm.get('password').hasError('password') ? 'Not a valid password' : '';
  }

  public fullNameErrorMessage(loginForm: FormGroup): string {
    if (loginForm.get('fullName').hasError('required')) {
      return 'You must enter a fullName';
    }

    return loginForm.get('fullName').hasError('fullName') ? 'Not a valid fullName' : '';
  }
}
