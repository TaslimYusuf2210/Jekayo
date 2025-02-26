import { Component, OnInit } from '@angular/core';
import { CardComponent } from '../../../card/card.component';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { AddMoreComponent } from '../../../add-more/add-more.component';
import { GlobalService } from '../../../global.service';
import { CommonModule } from '@angular/common';
import { RenderOrderComponent } from '../../../render-order/render-order.component';
import { OrderService } from '../../../order.service';
import { RenderOrderButtonComponent } from '../../../render-order-button/render-order-button.component';


@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [CardComponent, MatDialogModule, CommonModule, RenderOrderComponent, RenderOrderButtonComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent implements OnInit {
  meals:any[] = []
  accessories:any[] = []
  drinks:any[] = []
  snacks:any[] = []

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
    this.getDrinkItems()
    this.getSnacksItems()
    this.getMenu()
  }

  isMenuPresent(item:any){
    if (item < 0) {
      return {
        'display': 'grid',
        'grid-template-column': 'repeat(1, minmax(0, 1fr))'
      }
    } else return
  }


  getMenu(){
    let menuItems = this.globalService.getData('menuList')
    console.log(menuItems)
    return menuItems
  }

  getMealItems(){
    this.meals = this.getMenu().filter((item:any) => item.menuType === 'meal')
  }

  getAccessoriesItems(){
    this.accessories = this.getMenu().filter((item:any) => item.menuType === 'accessory')
  }

  getDrinkItems(){
    this.drinks = this.getMenu().filter((item:any) => item.menuType === 'drinks')
  }

  getSnacksItems(){
    this.snacks = this.getMenu().filter((item:any) => item.menuType === 'snacks')
  }

  userOrder:any = []
  onAddOrder(item:any){
    console.log('adding order')
    this.orderService.addOrder(item)
  }
  
}
export interface orderModel {
  id:string,
  name:string,
  price:number,
  quantity:number,
  menutype:string,
  description:string,
  imageLink:string,
}