import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/services/order.service';
import { ElementSchemaRegistry } from '@angular/compiler';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
total=0;
cart:any;
  constructor(private os:OrderService) { }
 
  ngOnInit(): void {
     let cart=localStorage.getItem("cart");
     this.cart  =cart? JSON.parse(cart): [];

     for(let x in this.cart){
       this.total+=this.cart[x].qty*this.cart[x].price;
       console.log(this.total)
     }
  }

  placeOrder(){
    console.log("It is called")
    if(this.cart.length>0)
    this.os.makeOrder();
    else
    alert("cart is empty")
  }

}
