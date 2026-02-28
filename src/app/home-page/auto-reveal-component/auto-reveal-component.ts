import {AfterViewInit, Component, ElementRef, OnDestroy, Renderer2} from '@angular/core';

@Component({
  selector: 'app-auto-reveal-component',
  imports: [],
  templateUrl: './auto-reveal-component.html',
  styleUrl: './auto-reveal-component.css',
})
export class AutoRevealComponent implements AfterViewInit, OnDestroy {

  private observer!: IntersectionObserver;

  constructor(
    private el: ElementRef,
    private renderer: Renderer2
  ) {}

  ngAfterViewInit(): void {
    const elements = this.el.nativeElement.querySelectorAll('.autoReveal');
    this.observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        console.log(entry)
        const ratio = entry.intersectionRatio;

        if (ratio > 0.3) {
          this.renderer.addClass(entry.target, 'revealed');
        } else if (ratio < 0.05) {
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
