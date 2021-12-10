import { Component, OnInit } from '@angular/core';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {
subject:string;
message:string;
  constructor(private cs:ContactService) { }

  ngOnInit(): void {
  }
  send(){
      if(this.subject == undefined || this.subject.length <5 )
        alert (" Subject should be atleast 5 char long")

      else  if(this.message == undefined || this.message.length <5 )
        alert (" Message should be atleast 20 char long")
      else {
           let username=sessionStorage.getItem("username")
           let email=sessionStorage.getItem("email")
           let obj ={username:username,email:email,subject:this.subject,message:this.message};
           this.cs.sendMessage(obj).subscribe(
             ()=>  {alert ("Message Sent"); this.subject="",this.message=""},
             ()=>  {alert("Not able to send your message")}
           )

      }
  }
}
