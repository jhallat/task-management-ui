import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appPrimaryButton]'
})
export class PrimaryButtonDirective {

  constructor(element: ElementRef) {
    element.nativeElement.classList.add('primary-button');
  }

}
