import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {

  @Input() rice:string = "data:image/jpeg;base64,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"
  @Input() name:string = "White rice"
  @Input() content:string = "Pure steaming boiled rice with a decent amount of salt"
  @Input() price:string = "2,000"

}