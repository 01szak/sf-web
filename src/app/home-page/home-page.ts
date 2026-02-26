import { Component } from '@angular/core';
import {AboutComponent} from './about-component/about-component';
import {VideoComponent} from './video-component/video-component';

@Component({
  selector: 'app-home-page',
  imports: [
    AboutComponent,
    VideoComponent
  ],
  templateUrl: './home-page.html',
  styleUrl: './home-page.css',
})
export class HomePage {

}
