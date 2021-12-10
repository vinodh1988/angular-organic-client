import { Component, OnInit } from '@angular/core';
import PubSub from 'pubsub-js';
import { LogService } from '../services/login.service';
import { Router } from '@angular/router';

interface User {
  username:string;
  usertype:string;
  token:string;
  email:string;

}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
// Login variables
 username:string="";
 password:string="";
 error:string;
 status:boolean=false;

 // Register Variables

 rusername:string="";
 rpassword:string="";
 vpassword:string="";
 remail:string="";
 rerror:string;
 rstatus:boolean=false

// Common variables

  logform:boolean=true;

  constructor(private log:LogService,private route:Router) { }

  ngOnInit(): void {
    PubSub.subscribe('log-error',(e,data)=>
       this.error="Invalid login credentials"
    )
  }
  
  toggle(){
     this.logform=this.logform?false:true;
  }

  login():void{
    this.error="";
    if(this.username.length==0 || this.password.length==0)
    this.error="Fill all the fields";
    else{
      this.status=true;
      this.log.login(this.username,this.password).subscribe(
           (user:User)=>{
             sessionStorage.setItem("username",user.username);
             sessionStorage.setItem("usertype",user.usertype);
             sessionStorage.setItem("token",user.token);
             sessionStorage.setItem("email",user.email);
             this.log.username=user.username;
             this.log.usertype=user.usertype;
             this.log.token=user.token;
             this.status=false;
             if(user.usertype=="admin")
                 this.route.navigate(['admin/home']);
             else
                 this.route.navigate(['user/home']);
           },
           ()=>{
             this.error="Invalid Credentials";
             this.status=false;
           }
      )
          }
  }

  //new User Registration 

  register():void{
     alert("Called");
      this.rerror="";
      let emailregex:RegExp=/^[a-z][a-z0-9_\.]+@[a-z]{2,5}\.[a-z]{3,5}$/


      if(this.rusername.length==0 || this.rpassword.length==0 || this.vpassword.length==0 )
      this.rerror="Fill all the fields";

      else if(this.rusername.length<4)
      this.rerror="Username should be atleast 4 charectars long"

      else if(this.rpassword.length<6)
      this.rerror="password should be atleast 6 charectars long"

      else if(this.rpassword!=this.vpassword)
      this.rerror="Username and password should match"
      
      else if(!emailregex.test(this.remail))
      this.rerror="not in email format"

     
      else{
          this.rstatus=true;
        
                   this.rstatus=true;
                   let obj={username:this.rusername,password:this.rpassword,usertype:"user",email: this.remail}
                   this.log.register(obj).subscribe(
                      (result:any)=>{
                          if(result.success == false)
                            alert("User already exists")
                          else{
                          alert("User successfully registered");
                          this.logform=true;
                          this.rstatus=false;
                          }
                      },
                      ()=>{
                          alert("There is problem , Please try again or later")
                          this.rstatus=false;
                      }
                   )
               }
           
      }
  

}
