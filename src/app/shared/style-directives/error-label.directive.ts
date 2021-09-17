import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appErrorLabel]'
})
export class ErrorLabelDirective {

  constructor(element: ElementRef) {
    element.nativeElement.classList.add('error-label');
  }

}
