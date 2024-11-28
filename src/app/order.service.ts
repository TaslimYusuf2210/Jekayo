import { Injectable, OnChanges, SimpleChanges } from '@angular/core';
import { GlobalService } from './global.service';
import { BehaviorSubject } from 'rxjs';

export interface Orders {
  id: string;
  name: string;
  price: number;
  quantity: number;
}

@Injectable({
  providedIn: 'root'
})
export class OrderService implements OnChanges{

  public cart = new BehaviorSubject(false)
  cart$ = this.cart.asObservable()

  constructor(private globalService: GlobalService) { }

  ngOnChanges(changes: SimpleChanges): void {
    throw new Error('Method not implemented.');
  }


  addOrder(product:Orders) {
    let cartOrders = this.globalService.getData('orders') || []
    const existingProduct = cartOrders.find((item:Orders) => item.id == product.id);

    console.log(product)
    if (existingProduct) {
      console.log("menu already ordered")
      existingProduct.quantity += 1;
      console.log(cartOrders)
      this.globalService.saveData('orders', cartOrders)
    } else {
      cartOrders.push({ ...product, quantity: 1 });
      console.log(cartOrders)
      this.globalService.saveData('orders', cartOrders)
    }

    this.cart.next(true)
  }

  addOrderButton(order:any){
    let oldOrders = this.globalService.getData('orders')
    
    if (oldOrders) {
      let clickedOrder = oldOrders[order]
      clickedOrder.quantity += 1
      this.globalService.saveData('orders', oldOrders)
      console.log(oldOrders);
    }
    this.cart.next(true)
  }

  removeOrder(index: number) {
    let orders = this.globalService.getData('orders')
    // const itemIndex = orders.findIndex((item:any) => item.id === );
    console.log(index)

    if (index < 0) return
      // const deleteItem = currentItems[itemIndex];
      if (orders[index].quantity > 1) {
        orders[index].quantity -= 1; 
        this.globalService.saveData('orders', orders)
        console.log(orders) 
        
      
      // else {
      //   currentItems = currentItems.filter((item:any) => item.id !== item); 
      // }
      this.cart.next(true); 

    } else if (orders[index].quantity == 1) {
      orders.splice(index, 1)
      this.globalService.saveData('orders', orders)
      this.cart.next(true); 
    }
  }

  getOrders() {
    let cartOrders = this.globalService.getData('orders')
    console.log(cartOrders)
    // return this.cart$
  }

  clearCart(){
  }



  // Calculate total price
  // calculateOrderTotal() {
  //   return this.cart.reduce(
  //     (total:any, item:any) => total + item.price * item.quantity,
  //     0
  //   );
  // }
}
