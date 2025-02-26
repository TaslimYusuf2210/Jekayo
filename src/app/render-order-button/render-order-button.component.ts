import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../global.service';
import { OrderService } from '../order.service';
import { MatDialog } from '@angular/material/dialog';
import { OrderItemsComponent } from '../order-items/order-items.component';

@Component({
  selector: 'app-render-order-button',
  standalone: true,
  imports: [],
  templateUrl: './render-order-button.component.html',
  styleUrl: './render-order-button.component.scss'
})
export class RenderOrderButtonComponent implements OnInit {

  renderButton:any[] = []
  totalAmount!: number;
  totalItem!: number;
  data: any;

  constructor(public globalService: GlobalService, public orderService: OrderService, private dialog: MatDialog,  ){}

  ngOnInit(): void {

    this.data = this.globalService.getData('orders')
    console.log(this.data)
    
    this.orderService.cart$.subscribe((value) => {
      if (value) {
        this.renderCartButton()
        this.calculateTotalOrderItem()
        this.calculateOrderAmount()
      }
    })
    this.renderCartButton()
    this.calculateTotalOrderItem()
    this.calculateOrderAmount()
  }

  renderCartButton(){
    let render = this.globalService.getData('orders');
    console.log(render)
    this.renderButton = render
  }

  calculateOrderAmount() {
    let total = this.orderService.calculateOrderAmount();
    this.totalAmount = total
  }

  calculateTotalOrderItem(){
    let totalItems = this.orderService.calculateTotalOrderItem()
    this.totalItem = totalItems
  }

  orderItems(data:any){
    console.log(data)
    this.dialog.open(OrderItemsComponent, {
      minWidth: '60%',
      height: '99%',
      data: data,
      panelClass: 'fullscreen-dialog-slide',
      enterAnimationDuration: '0.9s',
      exitAnimationDuration: '0.9s',
      position: {
        top: '0',
        right: '0',
    }
  }
  )
  }

  viewOrders(event:any){
    let orderId = event.id
    console.log(orderId)
  }

  

}
