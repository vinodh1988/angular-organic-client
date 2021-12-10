import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  pictures:string[]=["shipping.png","wishlist.png","profile.png"];
  urls:string[]=["orders","wishlist","profile"];
  strings:string[]=["Orders","Wishlist","Profile"];
  show:boolean=true;
  products:any[];
  sproducts:any[];
  vproducts:any[];
  fproducts:any[];
  constructor(public ps:ProductsService,public route:ActivatedRoute,public router:Router) { }

  ngOnInit(): void {
     this.ps.getProducts().subscribe(
       (data:any)=>this.products = data,
       ()=> this.sproducts = []
     )
     this.ps.getProducts2("Fruits").subscribe(
      (data:any)=>this.fproducts = data,
      ()=> this.sproducts = []
    )
    this.ps.getProducts2("Vegetables").subscribe(
      (data:any)=>this.vproducts = data,
      ()=> this.sproducts = []
    )
    this.ps.getProducts2("Salads").subscribe(
      (data:any)=>this.sproducts = data,
      ()=> this.sproducts = []
    )
  }
  
  ngDoCheck(){
    if(this.router.url==="/user/home") 
     this.show=true;
    else
     this.show=false;
  }


}
