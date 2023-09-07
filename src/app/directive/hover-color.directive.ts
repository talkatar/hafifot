import { Directive, ElementRef, HostBinding, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[hoverColor]'
})
export class HoverColorDirective  {

  constructor(private el: ElementRef,private renderer:Renderer2) { }



  @HostListener('mouseover')
  onMouseOver() {
    // this.el.nativeElement.style.backgroundColor='yellow'
    // this.renderer.setStyle(this.el.nativeElement, 'background-color', 'yellow');

    this.bgColor = 'yellow'
    this.fontWeight = '700 '

  }
  @HostBinding('style.backgroundColor')
  bgColor = ''

  @HostBinding('style.fontWeight')
  fontWeight = '0'

  @HostListener('mouseleave')
  onMouseLeave() {
    this.renderer.removeStyle(this.el.nativeElement, 'background-color');

    // this.el.nativeElement.style.backgroundColor=''

    this.bgColor = ''
    this.fontWeight = '200'

  }

}

