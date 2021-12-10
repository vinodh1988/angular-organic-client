import { Component, OnInit, Input } from '@angular/core';
import { LogService } from 'src/app/services/login.service';
import { Router, ActivatedRoute } from '@angular/router';
import PubSub from "pubsub-js";

@Component({
  selector: 'app-menu-outline',
  templateUrl: './menu-outline.component.html',
  styleUrls: ['./menu-outline.component.css']
})
export class MenuOutlineComponent implements OnInit {
@Input() pictures:string[];
@Input() strings:string[];
@Input() urls:string[];
cartshow:boolean=true;
cartCount:number=1;
username:string;
  constructor(private log:LogService,private router:Router,private route:ActivatedRoute) { }

  ngOnInit(): void {
     let usertype=sessionStorage.getItem("usertype");
     this.username=sessionStorage.getItem("username");
     if(usertype=="admin")
      this.cartshow=false;
     let cart=localStorage.getItem("cart");
     if(cart)
        this.cartCount=JSON.parse(cart).length;
     else
        this.cartCount=0;
        PubSub.subscribe("cart-event",(event,data)=>{
          this.cartCount=data;
      });
  }

  
  navigate(url:string){
    
    if(url=="")
    window.location.reload()
    else
    this.router.navigate([url], {relativeTo:this.route});
  }
  logout(){
    this.log.logout();
    window.location.reload();
}
}
