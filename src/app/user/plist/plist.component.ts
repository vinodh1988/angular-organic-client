import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-plist',
  templateUrl: './plist.component.html',
  styleUrls: ['./plist.component.css']
})
export class PlistComponent implements OnInit {
 
  @Input() products:any[]=[];
  @Input() producttitle:string;
 
  constructor(public router:Router,public route:ActivatedRoute) { }

  ngOnInit(): void {
  }
  
  changeroute(current){
    this.router.navigate(['details'],{relativeTo:this.route,state:current});;
  }

}
