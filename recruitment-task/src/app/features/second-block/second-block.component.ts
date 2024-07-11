import { Component } from '@angular/core';
import { BlockTitleComponent } from '../../shared/block-title/block-title.component';
import { ControlButtonComponent } from './components/control-button/control-button.component';

@Component({
  selector: 'app-second-block',
  standalone: true,
  imports: [BlockTitleComponent, ControlButtonComponent],
  templateUrl: './second-block.component.html',
  styleUrl: './second-block.component.scss',
})
export class SecondBlockComponent {
  title = 'blok drugi';

  replaceContent(): void {
    console.log('replace');
  }

  appendContent(): void {
    console.log('append');
  }
}
