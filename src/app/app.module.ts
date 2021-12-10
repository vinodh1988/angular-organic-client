import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http'
import {FormsModule,ReactiveFormsModule} from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { ScrollDirective } from './directives/scroll.directive';
import { ScrollBackDirective } from './directives/scroll-back.directive';
import { ComplaintsComponent } from './common/complaints/complaints.component';
import { InboxComponent } from './common/inbox/inbox.component';
import { ProductFormComponent } from './common/product-form/product-form.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ProductFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
