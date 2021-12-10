import { Injectable } from '@angular/core';
import PubSub from 'pubsub-js';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class OrderService {
httpOptions;
  constructor(private http:HttpClient) { }

  cartchecker(id){
    let cart:any=localStorage.getItem("cart");
    if(cart){
        cart=JSON.parse(cart);
        for(let x in cart){
            console.log(id,cart[x].id);
            if(Number(cart[x].id)===Number(id)){
             return true;
        }
    }
    }
    return false;
}

addToCart(obj){
   let cart:any=localStorage.getItem("cart");
   console.log(cart)
   if(cart==null){
        console.log("inside")
        cart=[]
        
   }
   else
       cart=JSON.parse(cart);
       cart.push(obj);
       localStorage.setItem("cart",JSON.stringify(cart));
       PubSub.publish("cart-event",cart.length);
   
}

makeOrder(){
 let user=sessionStorage.getItem("username");


 let orderId=new Date().getTime()+user.substr(user.length-4,user.length-1);
 
 let obj ={username:user,orderid:orderId,date:new Date(),cart:  JSON.parse(localStorage.getItem("cart"))}
 this.makeOrderRest(obj).subscribe(
   ()=>{
    localStorage.removeItem("cart");
    PubSub.publish("cart-event",0);
    alert("Order submitted");
    window.location.reload();
   },
   ()=>{
      alert("Currently you cannot make an order due to server issues")
   }
 )

 
 
}

makeOrderRest(obj):Observable<object>{
  this.httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
      })
    }
   return this.http.post("http://localhost:4500/orders/all",obj,this.httpOptions)
} 

getOrdersByUsername():Observable<object>{
  let user=sessionStorage.getItem("username");
  return this.http.get("http://localhost:4500/orders/all/"+user);
}

getOrders():Observable<object>{

  return this.http.get("http://localhost:4500/orders/all/");
}
}
