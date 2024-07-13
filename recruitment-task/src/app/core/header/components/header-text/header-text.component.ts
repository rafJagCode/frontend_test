import { Component } from '@angular/core';
import { ShowNameService } from '../../../../services/show-name/show-name.service';

@Component({
  selector: 'app-header-text',
  standalone: true,
  imports: [],
  templateUrl: './header-text.component.html',
  styleUrl: './header-text.component.scss',
  host: { class: 'header-text' },
})
export class HeaderTextComponent {
  public showName: boolean = false;
  constructor(showNameService: ShowNameService) {
    showNameService.showName$.subscribe(
      (showName) => (this.showName = showName)
    );
  }
}
