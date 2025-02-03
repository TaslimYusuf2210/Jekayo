import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  ReactiveFormsModule,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { signupModel } from './signupModel';
import { GlobalService } from '../../../global.service';
import { RouterModule } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { SignInComponent } from '../sign-in/sign-in.component';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, RouterModule],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.scss'
})
export class SignUpComponent implements OnInit {
  signUpForm!: FormGroup;
  constructor(private fb: FormBuilder, private globalService: GlobalService, private dialog: MatDialog){
  }

  ngOnInit(): void {
    this.signUpForm = this.fb.group({
      firstName:['', Validators.required],
      // userName:['', Validators.required],
      lastName:['', Validators.required],
      mobileNumber:['', 
        [Validators.required,
        Validators.pattern('^[0-9]{11}$') 
      ]],
      email:['', [Validators.required, Validators.email]],
      password:['', [Validators.required, Validators.minLength(8)]]
    })

    // this.clearStorage()
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
    let usersData = this.globalService.getData('storeUsers')

    // let newUsersData = usersData ? JSON.parse(usersData) : [];
    let newUsersData = []

    if (usersData) {
      newUsersData = usersData;
      console.log(newUsersData)
    } else {
      newUsersData = [];
    }

    newUsersData.push(formData)
    this.globalService.saveData('storeUsers', newUsersData)
    console.log(newUsersData)
    alert('registration successful')
    this.dialog.closeAll()
    this.dialog.open(SignInComponent, {
      width: '50vw',
      height: '60vh',
    })
    this.signUpForm.reset()
  }

  clearStorage(){
    localStorage.clear()
  }
  
}
