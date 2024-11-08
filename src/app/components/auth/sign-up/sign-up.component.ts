import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  ReactiveFormsModule,
  FormBuilder,
  FormGroup,
  Validators,
  FormControl,
} from '@angular/forms';
import { signupModel } from './signupModel';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.scss'
})
export class SignUpComponent implements OnInit {
  signUpForm!: FormGroup;
  constructor(private fb: FormBuilder){
  }

  ngOnInit(): void {
    this.signUpForm = this.fb.group({
      firstName:['', Validators.required],
      userName:['', Validators.required],
      lastName:['', Validators.required],
      mobileNumber:['', 
        [Validators.required,
        Validators.pattern('^[0-9]{11}$') 
      ]],
      email:['', [Validators.required, Validators.email]],
      password:['', [Validators.required, Validators.minLength(8)]]
    })
  }

  get f() {
    return this.signUpForm.controls;
  }
  get mobileNumber() {
    return this.signUpForm.get('mobileNumber');
  }

  onSignUp(){
    if (this.signUpForm.invalid) return

    const formData =  this.signUpForm.value as signupModel
    let usersData = localStorage.getItem('storeUsers')
    let newUsersData:any

    if(usersData){
      newUsersData = usersData
    } else {
      newUsersData = []
    }

    newUsersData.push(formData)
    localStorage.setItem('storeUsers', newUsersData)
    console.log(newUsersData)
    alert('registration successful')
  }
  
}
