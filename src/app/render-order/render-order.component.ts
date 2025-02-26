import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { OrderService, Orders } from '../order.service';
import { GlobalService } from '../global.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { OrderingDetailsComponent } from '../ordering-details/ordering-details.component';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-render-order',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  templateUrl: './render-order.component.html',
  styleUrl: './render-order.component.scss'
})
export class RenderOrderComponent implements OnInit{

  orders:Orders[] = []
  totalAmount!: number;
  totalItem!: number;

  @Input() price!:number
  @Input() name:string = ''

  image:string = "https://glovoapp.com/images/svg/astronaut-grey-scale.svg"

  constructor(private orderService: OrderService, public globalService: GlobalService, private router: Router, private dialog: MatDialog){
  }

  ngOnInit(): void {
  this.orders =  this.globalService.getData('orders')
  this.orderService.cart$.subscribe((value) => {
    if (value) {
      this.orders =  this.globalService.getData('orders')
      this.calculateTotalOrderItem()
      this.calculateOrderAmount()
    }
    // this.totalItem = value
    this.calculateOrderAmount()
    this.calculateTotalOrderItem()
  })

  }

  addOrders(order:any){
    this.orderService.addOrderButton(order)
  }

  removeOrder(item:any){
    this.orderService.removeOrder(item)
  }

  calculateOrderAmount() {
    let total = this.orderService.calculateOrderAmount();
    this.totalAmount = total
  }

  calculateTotalOrderItem(){
    let totalItems = this.orderService.calculateTotalOrderItem()
    this.totalItem = totalItems
  }

  openOrderModal(){
    this.dialog.open(OrderingDetailsComponent, {
      minHeight: "50vh",
      width: "40vw"
    })
  }
}
