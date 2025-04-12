import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {LayoutComponent} from './components/layout/layout.component';
import {ProfileComponent} from './components/profile/profile.component';

@Component({
  selector: 'app-root',
  imports: [LayoutComponent, ProfileComponent],
  templateUrl: './app.component.html',
  standalone: true,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'RevDO';
}
