import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-reactive-forms',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule, CommonModule],
  templateUrl: './reactive-forms.component.html',
  styleUrl: './reactive-forms.component.css',
})
export class ReactiveFormsComponent implements OnInit {
  registerForm!: FormGroup;
  constructor() {}
  ngOnInit(): void {
    this.registerForm = new FormGroup({
      fname: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        Validators.pattern('[a-zA-Z].*'),
      ]),
      lname: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        Validators.pattern('[a-zA-Z].*'),
      ]),
      uname: new FormControl('', [Validators.required]),
      mobile: new FormControl('', [
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(10),
        Validators.pattern('[0-9]*'),
      ]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(8),
      ]),
      cpassword: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(8),
      ]),
      checkbox: new FormControl('', [Validators.required]),
    });
  }

  get Fname() {
    return this.registerForm.get('fname') as FormControl;
  }
  get Lname() {
    return this.registerForm.get('lname') as FormControl;
  }
  get user() {
    return this.registerForm.get('uname') as FormControl;
  }
  get number() {
    return this.registerForm.get('mobile') as FormControl;
  }
  get mail() {
    return this.registerForm.get('email') as FormControl;
  }
  get pwd() {
    return this.registerForm.get('password') as FormControl;
  }
  get cpwd() {
    return this.registerForm.get('cpassword') as FormControl;
  }
  get check() {
    return this.registerForm.get('checkbox') as FormControl;
  }

  Registration() {
    console.log(console.log(this.registerForm.value, 'successfull'));
  }
}
