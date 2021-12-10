import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuOutlineComponent } from '../common/menu-outline/menu-outline.component';
import { AboutusComponent } from '../common/aboutus/aboutus.component';
import { ContactusComponent } from '../common/contactus/contactus.component';
import { ProductComponent } from '../user/product/product.component';
import { PlistComponent } from '../user/plist/plist.component';
import { ScrollDirective } from '../directives/scroll.directive';
import { ScrollBackDirective } from '../directives/scroll-back.directive';
import { AngmaterialModule } from '../angmaterial/angmaterial.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ComplaintsComponent, DialogComponent } from '../common/complaints/complaints.component';
import { InboxComponent } from '../common/inbox/inbox.component';



@NgModule({
  declarations: [MenuOutlineComponent,AboutusComponent,ContactusComponent,
    ProductComponent,PlistComponent, ScrollDirective,ScrollBackDirective,ComplaintsComponent,DialogComponent,InboxComponent],
  imports: [
    CommonModule,  AngmaterialModule ,FormsModule,ReactiveFormsModule
  ],
  exports: [
    MenuOutlineComponent,AboutusComponent,ContactusComponent,ProductComponent,PlistComponent,ComplaintsComponent,DialogComponent,InboxComponent]
})
export class SharedModule { }
