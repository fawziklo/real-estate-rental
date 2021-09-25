import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { AuthenticationComponent } from './authentication.component';
import { AutheticationRoutingModule } from './authentication.routing.module';
import { LoginModule } from './login/login.module';
import { SignUpModule } from './sign-up/sign-up.module';



@NgModule({
  declarations: [AuthenticationComponent],
  imports: [
    CommonModule,
    AutheticationRoutingModule,
    LoginModule,
    SignUpModule,
  ],
  providers: [],
})
export class AuthenticationModule { }
