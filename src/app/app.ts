import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {Navbar} from './navbar/navbar';
import {HomePage} from './home-page/home-page';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, HomePage],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('sf-web');
}
