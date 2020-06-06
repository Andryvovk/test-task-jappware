import { Directive, Input, ElementRef, AfterViewInit, OnChanges } from '@angular/core';

@Directive({
  selector: '[appColorFont]'
})
export class ColorFontDirective implements AfterViewInit, OnChanges {
  @Input() type: string;
  constructor(private elementRef: ElementRef) { }
  
  ngAfterViewInit() {
    this.changeFontColor();
  }

  ngOnChanges(changes) {
    if (changes.type) {
      this.changeFontColor();
    }
  }

  changeFontColor() {
    let color = this.elementRef.nativeElement.style.color;
    switch (this.type) {
      case 'activated':
        this.elementRef.nativeElement.style.color = '#3CB371'
        break;
      case 'deactivated': 
      this.elementRef.nativeElement.style.color = '#ff1919'
        break;
      case 'pending': 
      this.elementRef.nativeElement.style.color = '#696969'  
      default:
        break;
    }
  }
}
