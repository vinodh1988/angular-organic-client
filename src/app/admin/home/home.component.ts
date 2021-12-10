import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  pictures:string[]=["shipping.png","products.png","profile.png"];
  urls:string[]=["orders","","profile"];
  strings:string[]=["Orders","Products","Profile"];
  constructor() { }

  ngOnInit(): void {
  }

}
