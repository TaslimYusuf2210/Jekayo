import { Component, OnInit } from '@angular/core';
import { CardComponent } from '../../../card/card.component';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { AddMoreComponent } from '../../../add-more/add-more.component';
import { GlobalService } from '../../../global.service';
import { CommonModule } from '@angular/common';
import { RenderOrderComponent } from '../../../render-order/render-order.component';
import { OrderService } from '../../../order.service';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [CardComponent, MatDialogModule, CommonModule, RenderOrderComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent implements OnInit {
  meals:any[] = []
  accessories:any[] = []
  constructor(private dialog:MatDialog, private globalService:GlobalService, private orderService: OrderService){}

  openModal(){
    this.dialog.open(AddMoreComponent, {
      width: '50vw',
      minHeight: 'auto'
    })

  }

  ngOnInit(): void {
    this.getMealItems() 
    this.getAccessoriesItems()
  }


  getMenu(){
    let menuItems = this.globalService.getData('menuList')
    return menuItems
  }

  getMealItems(){
    this.meals = this.getMenu().filter((item:any) => item.menuType === 'meal')
  }

  getAccessoriesItems(){
    this.accessories = this.getMenu().filter((item:any) => item.menuType === 'accessory')
  }

  userOrder:any = []
  getOnAddOrder(value:any){
    let clickedOrder:orderModel = {
      name: value.description,
      price: value.price,
      quantity: 1
    }
    this.userOrder.push(clickedOrder)
    this.globalService.saveData('orders', this.userOrder)
    console.log(this.userOrder)
  }

  handleAddOrder(order:any){
    this.orderService.addOrder(order)
  }

  
}

interface orderModel  {
  name:string,
  price:number,
  quantity:number
}