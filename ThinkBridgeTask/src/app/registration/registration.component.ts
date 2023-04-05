import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
})
export class RegistrationComponent implements OnInit {
  registrationForm!: FormGroup;
  submitted = false;
  get f(): { [key: string]: AbstractControl } {
    return this.registrationForm.controls;
  }
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.registrationForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      title: [''],
      companyName: [''],
      companySize: [''],
      message: [''],
      isFutureWebinar: [false],
    });
  }

  formSubmit(data: any) {
    this.submitted = true;

    if (this.registrationForm.invalid) {
      return;
    }

    console.log(this.registrationForm.value);
    this.submitted = false;
    this.registrationForm.reset();
  }
}
