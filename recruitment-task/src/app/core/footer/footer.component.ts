import { Component } from '@angular/core';
import { FooterIconComponent } from './components/footer-icon/footer-icon.component';

@Component({
  selector: '[app-footer]',
  standalone: true,
  imports: [FooterIconComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {}
