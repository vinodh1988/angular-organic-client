import { Component, OnInit } from '@angular/core';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'app-inbox',
  templateUrl: './inbox.component.html',
  styleUrls: ['./inbox.component.css']
})
export class InboxComponent implements OnInit {
sent:any;
received:any;
  constructor(private cs:ContactService) { }

  ngOnInit(): void {
      this.cs.getMessagesByUsername().subscribe(
        (data)=>this.sent=data,
        ()=>this.sent=[])

      this.cs.getMessagesByReciever().subscribe(
        (data)=>this.received=data,
        ()=>this.received=[])
      
  }

}
