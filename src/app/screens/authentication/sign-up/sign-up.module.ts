import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { SignUpComponent } from "./sign-up.component";



@NgModule({
  declarations: [SignUpComponent],
  imports: [
    CommonModule,
  ],
  exports: [SignUpComponent],
  providers: [],
})
export class SignUpModule { }
