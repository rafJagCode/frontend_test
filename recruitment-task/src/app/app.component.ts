import { Component } from '@angular/core';
import { HeaderComponent } from './core/header/header.component';
import { ContentComponent } from './core/content/content.component';
import { FooterComponent } from './core/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [HeaderComponent, ContentComponent, FooterComponent],
  host: { class: 'app' },
})
export class AppComponent {}
