import { Directive, ElementRef, AfterViewInit } from '@angular/core';

@Directive({
  selector: '[appLastUpdated]'
})
export class LastUpdatedDirective implements AfterViewInit {
  constructor(private el: ElementRef) {}

  ngAfterViewInit(): void {
    this.updateTimestamp();
  }

  private updateTimestamp() {
    const timestamp = new Date().toLocaleString();
    this.el.nativeElement.textContent = `Last Updated: ${timestamp}`;
  }
}
