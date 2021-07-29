import {Directive, ElementRef} from '@angular/core';

@Directive({
  selector: '[appPrimaryLink]'
})
export class PrimaryLinkDirective {

  constructor(element: ElementRef) {
    element.nativeElement.classList.add('primary-link');
  }

}
