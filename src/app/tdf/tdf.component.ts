import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ReactiveFormsComponent } from '../reactive-forms/reactive-forms.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tdf',
  standalone: true,
  imports: [FormsModule,ReactiveFormsModule,CommonModule],
  templateUrl: './tdf.component.html',
  styleUrl: './tdf.component.css'
})
export class TdfComponent  implements OnInit{
  RegForm!: FormGroup;
constructor(private form:FormBuilder){

}
  ngOnInit(): void {
    this.RegForm=this.form.group({
      fname:[''],
      lname:[''],
      uname:[''],
      mobile:[''],
      email:[''],
      password:[''],
      cpassword:[''],
      checkbox:['']

    })
  }
  Registration(){
    console.log(console.log(this.RegForm.value,"successfull"))
  }

}


