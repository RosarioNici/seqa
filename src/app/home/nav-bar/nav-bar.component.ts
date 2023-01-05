import { Component } from '@angular/core';
import { links } from './link-data';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent {




linkPages = links
}
