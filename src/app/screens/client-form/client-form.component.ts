import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-client-form',
  templateUrl: './client-form.component.html',
  styleUrls: ['./client-form.component.scss']
})
export class ClientFormComponent implements OnInit {

  public clientForm: FormGroup;

  constructor(
    private fb: FormBuilder,
  ) { }

  public ngOnInit(): void {
    this.clientForm = this.fb.group({
      civility: ['', [Validators.required]],
      fullName: ['', [Validators.required]],
      streetNum: ['', [Validators.required]],
      streetType: ['', [Validators.required]],
      streetName: ['', [Validators.required]],
      streetComplement: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      telphone: ['', [Validators.required]]
    })

  }
}
