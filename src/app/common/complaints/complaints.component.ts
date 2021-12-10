import { Component, OnInit, Inject } from '@angular/core';
import { ContactService } from 'src/app/services/contact.service';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-complaints',
  templateUrl: './complaints.component.html',
  styleUrls: ['./complaints.component.css']
})
export class ComplaintsComponent implements OnInit {
  messages:any[];
  constructor(private cs:ContactService,private dialog:MatDialog) { }

  ngOnInit(): void {
      this.cs.getMessages().subscribe
      (
        (data:any[])=>this.messages=data,
        ()=>this.messages=[]
      )
  }

  openDialog(to) {
  
    const dialogRef = this.dialog.open(DialogComponent,{
      data: {
        to:to,
        username:sessionStorage.getItem('username'),
        email: sessionStorage.getItem("email")
      }
    });
    
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }


}

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: []
})
export class DialogComponent implements OnInit {
  subject:string;
  message:string;
  constructor(private cs:ContactService,@Inject(MAT_DIALOG_DATA) public data) { 
    console.log(data)
  }

  ngOnInit(): void {
    
  
  }

  send(){
    let obj ={username:this.data.username,email:this.data.email,subject:this.subject,message:this.message,
      to:this.data.to};
      this.cs.sendMessage(obj).subscribe(
        ()=>  {alert ("Message Sent"); this.subject="",this.message=""},
        ()=>  {alert("Not able to send your message")}
      )
  }

}

