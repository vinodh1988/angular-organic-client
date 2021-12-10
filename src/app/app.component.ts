import { Component, AfterViewInit } from '@angular/core';

import {  Router } from '@angular/router';
import { LogService } from './services/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit{
  
       constructor(private log:LogService,private router:Router){
             
       }
//it will execute after constructor, first ui rendering, only once
      ngAfterViewInit(){
      
           
              if(!this.log.getStatus()){
                
                 this.router.navigate(['login'])
              }
              else{
                if(this.log.usertype=="admin")
                  this.router.navigate(['admin/home']);
                else
                  this.router.navigate(['user/home']);
              }
      }
       


}
