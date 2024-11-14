import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthService } from '../../../auth.service';

@Component({
  selector: 'app-access-page',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './access-page.component.html',
  styleUrl: './access-page.component.scss'
})
export class AccessPageComponent {

  constructor(private auth:AuthService){}

  signOut(){
    this.auth.logout()
  }
}
