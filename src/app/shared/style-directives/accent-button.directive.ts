import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appAccentButton]'
})
export class AccentButtonDirective {

  constructor(element: ElementRef) {
    element.nativeElement.classList.add('accent-button');
  }

}
