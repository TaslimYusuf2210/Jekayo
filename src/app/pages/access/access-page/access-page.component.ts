import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthService } from '../../../auth.service';
import { GlobalService } from '../../../global.service';

export interface usersDetails {
  firstName: string,
  lastName: string,
  mobileNumber: number,
  email: string,
  password: string,
}

@Component({
  selector: 'app-access-page',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './access-page.component.html',
  styleUrl: './access-page.component.scss'
})
export class AccessPageComponent implements OnInit {

  usersName:string = '';
  isMenuOpen:boolean = false;

  constructor(private auth:AuthService, private globalService: GlobalService){}

  signOut(){
    this.auth.logout()
  }

  ngOnInit(): void {
    this.getUsersName()
  }

  getUsersName(){
    let user:usersDetails = this.globalService.getData('loggedInUser');
    this.usersName = user.firstName
  }

  toggleMenu(){
    this.isMenuOpen = !this.isMenuOpen
  }

}
