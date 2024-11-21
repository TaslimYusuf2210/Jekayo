import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { OrderService } from '../order.service';
import { GlobalService } from '../global.service';

@Component({
  selector: 'app-render-order',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './render-order.component.html',
  styleUrl: './render-order.component.scss'
})
export class RenderOrderComponent implements OnInit{

  @Input() price!:number
  @Input() name:string = ''

  image:string = "https://glovoapp.com/images/svg/astronaut-grey-scale.svg"
  orders:any[] = []

  constructor(private orderService: OrderService){
  }

  ngOnInit(): void {
    this.orders = this.orderService.getOrders()
  }

  renderOrder(){

  }

  addOrders(item:any){
    this.orderService.addOrder(item)
  }

  removeOrder(item:any){
    this.orderService.removeOrder(item)
  }
}
