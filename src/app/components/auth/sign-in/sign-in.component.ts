import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormBuilder,
  FormGroup,
  Validators } from '@angular/forms';
import { GlobalService } from '../../../global.service';
import { AuthService } from '../../../auth.service';
import { Router } from '@angular/router';
import { MatDialogModule, MatDialog } from '@angular/material/dialog'


@Component({
  selector: 'app-sign-in',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, MatDialogModule],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.scss'
})
export class SignInComponent implements OnInit {
  signInForm!: FormGroup;

  constructor(private fb: FormBuilder, private globalService: GlobalService, private authService: AuthService, private router: Router, private dialogRef: MatDialog){}

  ngOnInit(): void {
    this.signInForm = this.fb.group({
      email:['', [Validators.required, Validators.email]],
      password:['', [Validators.required, Validators.minLength(8)]]
    })
  }

  get f() {
    return this.signInForm.controls;
  }

  onSignIn(){
    if (this.signInForm.invalid) return

    let email = this.signInForm.get('email')?.value;
    let password = this.signInForm.get('password')?.value;

    if (this.authService.loginUser(email, password)) {
      alert('Login successful');
      this.dialogRef.closeAll()
      this.router.navigate(['/jekayo/homepage'])
    } else {
      alert('Incorrect Password or Email')
    }

  }

}
