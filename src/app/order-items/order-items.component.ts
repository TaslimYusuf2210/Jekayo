import { Component, Inject, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { GlobalService } from '../global.service';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { orderModel } from '../pages/access/home-page/home-page.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-order-items',
  standalone: true,
  imports: [MatIconModule, CommonModule],
  templateUrl: './order-items.component.html',
  styleUrl: './order-items.component.scss'
})
export class OrderItemsComponent implements OnInit {

  orders:any[] = []

  constructor(
    private globalService: GlobalService,
    @Inject(MAT_DIALOG_DATA) public data: any,

  ){}

  ngOnInit() {
    console.log(this.data)
  }


}