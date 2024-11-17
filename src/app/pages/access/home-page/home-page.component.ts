import { Component } from '@angular/core';
import { CardComponent } from '../../../card/card.component';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { AddMoreComponent } from '../../../add-more/add-more.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [CardComponent, MatDialogModule, AddMoreComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {

  constructor(private dialog:MatDialog){}

  openModal(){
    this.dialog.open(AddMoreComponent, {
      width: '50vw',
      minHeight: 'auto'
    })
  }
}
