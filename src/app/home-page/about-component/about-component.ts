import {Component, ElementRef, Input, NgModule, OnInit, Renderer2} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'app-about-component',
  imports: [
    NgClass
  ],
  templateUrl: './about-component.html',
  styleUrl: './about-component.css',

})
export class AboutComponent {
  @Input() left!: string;
  @Input() right!: string;
  @Input() header!: string;

  private observer!: IntersectionObserver;

  constructor(
    private el: ElementRef,
    private renderer: Renderer2
  ) {}

  ngAfterViewInit(): void {
    const elements = this.el.nativeElement.querySelectorAll('.autoReveal');
    this.observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {

        const ratio = entry.intersectionRatio;

        if (ratio > 0.3) {
          // wejście
          this.renderer.addClass(entry.target, 'revealed');
        } else if (ratio < 0.05) {
          // cofanie dopiero gdy prawie zniknie
          this.renderer.removeClass(entry.target, 'revealed');
        }

      });
    }, {
      threshold: [0, 0.05, 0.3]
    });
    elements.forEach((el: Element) => {
      this.observer.observe(el);
    });
  }

  ngOnDestroy(): void {
    if (this.observer) {
      this.observer.disconnect();
    }
  }

}
