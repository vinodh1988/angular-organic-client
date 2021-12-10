import { Directive, ElementRef, HostListener,Input } from '@angular/core';

@Directive({
  selector: '[appScroll]'
})
export class ScrollDirective {
@Input('appScroll') appScroll:number;
  constructor(private el:ElementRef) {
      console.log("Working")  //<h1 [appScroll]="30"></h1>
   }

  @HostListener("click") 
  onClick():void{
      
      let temp=this.el.nativeElement.parentNode;
      console.log(temp);
       temp=temp.children[3];
      temp.scrollTo({ left: (temp.scrollLeft + this.appScroll), behavior: 'smooth' });
      
      console.log(temp);
      console.log();
  }

}
