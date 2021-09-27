import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { HeaderModule } from './../../shared/header/header.module';
import { HomeComponent } from "./home.component";





@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    HeaderModule
  ],
  providers: [],
  exports: [HomeComponent]
})
export class HomeModule { }
