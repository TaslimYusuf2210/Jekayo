import { Component } from '@angular/core';
import { MatDialogModule, MatDialog } from '@angular/material/dialog'
import { SignInComponent } from '../../components/auth/sign-in/sign-in.component';
import { SignUpComponent } from '../../components/auth/sign-up/sign-up.component';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [MatDialogModule],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss'
})
export class LandingPageComponent {

  signIn:any = SignInComponent
  signUp:any = SignUpComponent

  constructor(private dialog:MatDialog){

  }

  openModal(modal:any){
    this.dialog.open(modal,{
      width: '50vw',
      minHeight: 'auto',
    })
  }

}
