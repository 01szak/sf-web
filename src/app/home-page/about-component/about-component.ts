import {AfterViewInit, Component, ElementRef, Input, NgModule, OnDestroy, OnInit, Renderer2} from '@angular/core';
import {NgClass} from '@angular/common';
import {AutoRevealComponent} from '../auto-reveal-component/auto-reveal-component';

@Component({
  selector: 'app-about-component',
  imports: [
    NgClass
  ],
  templateUrl: './about-component.html',
  styleUrls: [
    './about-component.css',
    '../auto-reveal-component/auto-reveal-component.css'
  ],

})
export class AboutComponent extends AutoRevealComponent{
  @Input() left!: string;
  @Input() right!: string;
  @Input() header!: string;

}
