import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile/profile.component';
import { OrdersComponent } from './orders/orders.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { HomeComponent } from './home/home.component';
import { Routes, RouterModule } from '@angular/router';

import { SharedModule } from '../shared/shared.module';
import { ContactusComponent } from '../common/contactus/contactus.component';
import { UserhomeComponent } from './userhome/userhome.component';
import { AboutusComponent } from '../common/aboutus/aboutus.component';
import { ScrollDirective } from '../directives/scroll.directive';
import { ScrollBackDirective } from '../directives/scroll-back.directive';
import { DetailsComponent } from './details/details.component';
import { FormsModule } from '@angular/forms';
import { CartComponent } from './cart/cart.component';
import { InboxComponent } from '../common/inbox/inbox.component';
const route:Routes=[

  {
  path:"home",
  component: HomeComponent,
  children: [
     {
       path: "",
       component: UserhomeComponent
     },
     {
      path: "cart",
      component: CartComponent
     },
     {
      path: "details",
      component: DetailsComponent
    },
     {
       path: "aboutus",
       component:AboutusComponent
     },
     {
       path: "contactus",
       component:ContactusComponent
     },
     {
      path: "profile",
      component:ProfileComponent
    },
    {
      path: "orders",
      component: OrdersComponent
    },
    {
      path: "wishlist",
      component: WishlistComponent
    },
    {
      path: "inbox",
      component: InboxComponent
    }
  ]
  }
]
@NgModule({
  declarations: [ProfileComponent, OrdersComponent, 
    WishlistComponent, HomeComponent, DetailsComponent, CartComponent
],
  imports: [
    CommonModule,RouterModule.forChild(route),SharedModule,FormsModule
  ]
})
export class UserModule { }
