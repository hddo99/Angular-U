import { Directive, ElementRef, Input, HostListener} from '@angular/core';

@Directive({
  selector: '[appClass]'
})
export class ClassDirective {

  @Input('appClass') backgroundColor: string;
  //ElementRef to inject a reference to the host DOM element
  constructor(private element: ElementRef) {}

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight(this.backgroundColor || 'red');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight(null);
  }
  private highlight(color: string){
    this.element.nativeElement.style.backgroundColor = color;
  }
  

}
