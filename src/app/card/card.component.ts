import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {

  @Input() imageLink:string = ""
  @Input() name:string = ""
  @Input() description:string = ""
  @Input() price:string = ""
  @Output() addOrder = new EventEmitter()

  

  onAddOrder(){
    this.addOrder.emit(true)
  }
}
