import { MatCardModule } from '@angular/material/card';
import { NgModule } from '@angular/core';
import { ClientFormComponent } from './client-form.component';
import { CommonModule } from '@angular/common';
import { HeaderModule } from './../../shared/header/header.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';

import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';



@NgModule({
  declarations: [ClientFormComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatIconModule,
    ReactiveFormsModule,
    MatSelectModule,
    HeaderModule],
  providers: [],
  exports: [ClientFormComponent]
})
export class ClientFormModule { }
