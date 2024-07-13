import { Component } from '@angular/core';
import { HtmlIconComponent } from './components/html-icon/html-icon.component';
import { HeaderTextComponent } from './components/header-text/header-text.component';

@Component({
  selector: '[app-header]',
  standalone: true,
  imports: [HtmlIconComponent, HeaderTextComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  host: { class: 'header' },
})
export class HeaderComponent {}
