import {Component, ElementRef, HostListener, ViewChild} from '@angular/core';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [
    RouterLink
  ],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {

  @ViewChild('nav') nav!: ElementRef<HTMLElement>;

  private lastScroll = 0;
  protected logo = '/Logo_Camper Park_granatowo_biale.png';

  @HostListener('window:scroll', [])
  protected hide() {
    const scrollY = window.scrollY;
    const mainImg = document.querySelector<HTMLElement>('.mainImg');
    const mainImgHeight = mainImg?.offsetHeight || 0;
    const isOutsideMainImg = scrollY > mainImgHeight;

    if (isOutsideMainImg) {
      this.nav.nativeElement.style.top = '-100px';
    }
    if (isOutsideMainImg && scrollY < this.lastScroll ) {
      this.nav.nativeElement.classList.add('onScroll');
      this.logo = '/Logo_Camper Park_png (1).png';
      this.nav.nativeElement.style.top = '0';
    } else if (!isOutsideMainImg) {
      this.nav.nativeElement.classList.remove('onScroll');
      this.logo = '/Logo_Camper Park_granatowo_biale.png';
    }

    this.lastScroll = scrollY;
  }

}
