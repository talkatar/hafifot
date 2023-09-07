import { Directive, ElementRef, HostBinding, HostListener, Renderer2 } from '@angular/core';
import { UtilService } from '../services/util.service';

@Directive({
  selector: '[routeColor]'
})
export class RouteColorDirective {

  constructor(private el: ElementRef, private utilService: UtilService,private renderer:Renderer2) { };

  // colorsLettersCoupling=this.utilService.colorsLettersCoupling

defaultColor='black';
  @HostListener('click')
  
  onMouseClick() {
    // const appHeaderElement = this.el.nativeElement.querySelector('.app-header');
    // if (appHeaderElement) {
    //   this.renderer.setStyle(appHeaderElement, 'color', this.defaultColor);
    // }
    // this.renderer.setStyle(this.el.nativeElement.querySelector('app-header'), 'color', this.defaultColor);

    const firstLetter = this.el.nativeElement.innerText.charAt(0).toLowerCase();

    if (this.doesLetterExist(this.utilService.colorsLettersCoupling, firstLetter)) {
      this.setRouteColor(firstLetter);

    }
    else {
      var randomColor = this.generateRandomColor();

      while (this.doesColorExist(this.utilService.colorsLettersCoupling, randomColor)) {
        randomColor = this.generateRandomColor();
      }

      this.utilService.colorsLettersCoupling.push({ letter: firstLetter, color: randomColor });
      this.routeColor = randomColor;
    }
  }

  @HostBinding('style.color')
  routeColor = ''

  generateRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';

    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }

    return color;
  }

  doesColorExist(arr: { letter: string, color: string }[], color: string) {
    return arr.some(obj => obj.color === color);
  }

  doesLetterExist(arr: { letter: string, color: string }[], letter: string) {
    return arr.some(obj => obj.letter === letter);
  }

  setRouteColor(letter: string) {
    const letterIndex = this.utilService.colorsLettersCoupling.findIndex(obj => obj.letter === letter);
    this.routeColor = this.utilService.colorsLettersCoupling[letterIndex].color;
  }
}