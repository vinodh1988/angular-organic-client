import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products/products.component';
import { OrdersComponent } from './orders/orders.component';
import { ProfileComponent } from './profile/profile.component';
import { HomeComponent } from './home/home.component';
import { Routes, RouterModule } from '@angular/router';
import { MenuOutlineComponent } from '../common/menu-outline/menu-outline.component';
import { SharedModule } from '../shared/shared.module';
import { AboutusComponent } from '../common/aboutus/aboutus.component';
import { ContactusComponent } from '../common/contactus/contactus.component';
import { ComplaintsComponent } from '../common/complaints/complaints.component';
import { AngmaterialModule } from '../angmaterial/angmaterial.module';


const route:Routes=[

  {
  path:"home",
  component: HomeComponent,
  children: [
     {
       path: "",
       component: ProductsComponent
     },
     {
       path: "aboutus",
       component:AboutusComponent
     },
     {
       path: "contactus",
       component:ComplaintsComponent
     },
     {
      path: "profile",
      component:ProfileComponent
    },
    {
      path: "orders",
      component: OrdersComponent
    },
  ]
  }
]

@NgModule({
  declarations: [ProductsComponent, OrdersComponent, ProfileComponent, HomeComponent],
  imports: [
    CommonModule, RouterModule.forChild(route),SharedModule,AngmaterialModule
  ]
})
export class AdminModule { }
