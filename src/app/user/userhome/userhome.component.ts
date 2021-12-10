import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-userhome',
  templateUrl: './userhome.component.html',
  styleUrls: ['./userhome.component.css']
})
export class UserhomeComponent implements OnInit {
products:any[];
  constructor(public ps:ProductsService) { }

  ngOnInit(): void {
     this.ps.getProducts().subscribe(
       (data:any)=>this.products = data,
       ()=> this.products = []
     )
  }

}
