import { Component } from '@angular/core';
import { HtmlIconComponent } from './components/html-icon/html-icon.component';

@Component({
  selector: '[app-header]',
  standalone: true,
  imports: [HtmlIconComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {}
