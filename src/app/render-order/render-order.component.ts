import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { OrderService, Orders } from '../order.service';
import { GlobalService } from '../global.service';

@Component({
  selector: 'app-render-order',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './render-order.component.html',
  styleUrl: './render-order.component.scss'
})
export class RenderOrderComponent implements OnInit{

  orders:Orders[] = []

  @Input() price!:number
  @Input() name:string = ''

  image:string = "https://glovoapp.com/images/svg/astronaut-grey-scale.svg"

  constructor(private orderService: OrderService, public globalService: GlobalService){
  }

  ngOnInit(): void {
  this.orders =  this.globalService.getData('orders')
  this.orderService.cart$.subscribe((value) => {
    if (value) {
      console.log(value)
      this.orders =  this.globalService.getData('orders')
    }
  })

  }

  addOrders(order:any){
    this.orderService.addOrderButton(order)
  }

  removeOrder(item:any){
    this.orderService.removeOrder(item)
  }

  clearCart() {
    this.orderService.clearCart();
  }
}
