import { Injectable } from '@angular/core';
import { GlobalService } from './global.service';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  cart:any[] = []

  constructor(private globalService: GlobalService) { }

  addOrder(product: any) {
    const existingProduct = this.cart.find((item) => item.id === product.id);
    if (existingProduct) {
      existingProduct.quantity += product.quantity;
    } else {
      this.cart.push({ ...product, quantity: product.quantity || 1 });
    }
  }

  removeOrder(productId: number) {
    this.cart = this.cart.filter((item) => item.id !== productId);
  }

  // Get cart items
  getOrders() {
    // return this.cart;
    let orders = this.globalService.getData('orders')
    return orders
  }

  // Calculate total price
  calculateOrderTotal() {
    return this.cart.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  }
}
