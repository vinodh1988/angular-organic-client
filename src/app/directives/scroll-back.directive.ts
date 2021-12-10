import { Directive ,Input, HostListener,ElementRef} from '@angular/core';

@Directive({
  selector: '[appScrollback]'
})
export class ScrollBackDirective {

  @Input('appScrollback') appScroll:number;
  constructor(private el:ElementRef) {
      console.log("Working")
   }

  @HostListener("click") 
  onClick():void{
      console.log("working");
      let temp=this.el.nativeElement.parentNode;
      console.log(temp);
       temp=temp.children[3];
      temp.scrollTo({ left: (temp.scrollLeft - this.appScroll), behavior: 'smooth' });
      console.log("RAW")
      console.log(temp);
      console.log();
  }

}
