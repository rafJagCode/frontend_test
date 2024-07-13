import { Component } from '@angular/core';
import { BlockTitleComponent } from '../../shared/block-title/block-title.component';
import { ControlButtonComponent } from './components/control-button/control-button.component';
import { TextContentService } from '../../services/text-content/text-content.service';

@Component({
  selector: 'app-second-block',
  standalone: true,
  imports: [BlockTitleComponent, ControlButtonComponent],
  templateUrl: './second-block.component.html',
  styleUrl: './second-block.component.scss',
  host: { class: 'second-block' },
})
export class SecondBlockComponent {
  public title = 'blok drugi';

  constructor(public textContentService: TextContentService) {}

  replaceTextRecord = (): void => {
    this.textContentService.replaceTextRecord();
  };

  appendTextRecord = (): void => {
    this.textContentService.appendTextRecord();
  };
}
