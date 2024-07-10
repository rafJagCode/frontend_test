import { Component } from '@angular/core';
import { FooterIconComponent } from './components/footer-icon/footer-icon.component';
import { CompanyNameComponent } from './components/company-name/company-name.component';
import { ShowButtonComponent } from './components/show-button/show-button.component';

@Component({
  selector: '[app-footer]',
  standalone: true,
  imports: [FooterIconComponent, CompanyNameComponent, ShowButtonComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {}
