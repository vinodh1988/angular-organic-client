import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.css']
})
export class AboutusComponent implements OnInit {
 images:string[] = ["organic1.jpg","organic2.jpg","organic3.jpg","organic4.jpg","organic5.jpg"];
 current:string ="http://localhost:4500/images/organic1.jpg";
  constructor() { }

  ngOnInit(): void {
    setInterval(()=> this.current ="http://localhost:4500/images/" +this.images[Math.round(Math.random()*4)]
    ,2000)
  }

}
