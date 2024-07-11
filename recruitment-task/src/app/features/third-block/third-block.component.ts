import { Component } from '@angular/core';
import { BlockTitleComponent } from '../../shared/block-title/block-title.component';

@Component({
  selector: 'app-third-block',
  standalone: true,
  imports: [BlockTitleComponent],
  templateUrl: './third-block.component.html',
  styleUrl: './third-block.component.scss',
})
export class ThirdBlockComponent {
  title =
    'blok z długą nazwą która sama się przytnie gdy będzie dłuższa niż dostępne miejscę';
}
