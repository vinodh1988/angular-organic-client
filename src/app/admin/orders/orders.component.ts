import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  orders:any;
  constructor(private os:OrderService) { }

  ngOnInit(): void {
     this.os.getOrders().subscribe(
        (data:any)=>this.orders=data,
        ()=>this.orders=[]
     )
  }

}
