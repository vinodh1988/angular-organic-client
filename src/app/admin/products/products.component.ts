import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';
import { ProductFormComponent } from 'src/app/common/product-form/product-form.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
products:any;
  constructor(private ps:ProductsService,private dialog:MatDialog) { }

  ngOnInit(): void {
     this.ps.getProducts().subscribe(
       (data:any)=>this.products =data,
       ()=> this.products=[]
     )
  }

  
  loadDialog(){
    
    const dialogRef = this.dialog.open(ProductFormComponent, {
      width: '900px',
      height: '650px'
    });

    dialogRef.afterClosed().subscribe(()=>this.ngOnInit());

}
   loadUpdateDialog(x){
    const dialogRef = this.dialog.open(ProductFormComponent,{
      data: {
            id:x.id,
            type:x.type,
            name:x.name,
            description: x.description,
            qty:x.qty,
            image:x.image,
            price:x.price
      }
    });
    
    dialogRef.afterClosed().subscribe(result => {
      this.ngOnInit()
    });
   }

 remove(id){
   console.log("event fired",id)
   console.log(id)
    this.ps.removeProduct(id).subscribe(
      ()=>this.ngOnInit(),
      ()=>alert("unable to remove")
    )
 }

}
