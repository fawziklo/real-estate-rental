import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { HomeComponent } from "./home.component";
import { HomeRoutingModule } from "./home.routing.module";


@NgModule({
    declarations: [
      HomeComponent,
    ],
    imports: [    
        CommonModule,
        HomeRoutingModule],
    providers: [],
  })
  export class AppModule { }