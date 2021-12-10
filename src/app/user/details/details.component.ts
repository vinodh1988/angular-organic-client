import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
 state:any;
 qty:any=1;
 buttonstatus:string="Add to the Cart"
 active:boolean=true;
  constructor( private route:ActivatedRoute,private router:Router,public os:OrderService) { 
    this.state=this.router.getCurrentNavigation().extras.state;
  }
  ngOnInit(): void {
     if (this.os.cartchecker(this.state.id))
       {
               this.buttonstatus = "Already added to the cart";
               this.active=false;
       }
  }

  addToCart(){
    console.log("add to cart")
    this.os.addToCart(
      {
        id:this.state.id,
        name:this.state.name,
        price: this.state.price,
        qty: this.qty
    })
     this.ngOnInit();
    
  }

}
