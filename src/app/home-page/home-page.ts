import { Component } from '@angular/core';
import {AboutComponent} from './about-component/about-component';

@Component({
  selector: 'app-home-page',
  imports: [
    AboutComponent
  ],
  templateUrl: './home-page.html',
  styleUrl: './home-page.css',
})
export class HomePage {

}
