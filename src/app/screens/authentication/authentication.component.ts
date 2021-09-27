import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.scss']
})
export class AuthenticationComponent implements OnInit {

  public isRegistred = false;

  constructor() { }

  public ngOnInit(): void {
  }

  public signUpLink(event: boolean) {
    this.isRegistred = event;
  }

  public loginLink(event: boolean) {
    this.isRegistred = event;
  }

}
