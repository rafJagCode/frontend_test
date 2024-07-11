import { Component } from '@angular/core';
import { BlockTitleComponent } from '../../shared/block-title/block-title.component';
import { TextContentService } from '../../services/text-content/text-content.service';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-third-block',
  standalone: true,
  imports: [AsyncPipe, BlockTitleComponent],
  templateUrl: './third-block.component.html',
  styleUrl: './third-block.component.scss',
})
export class ThirdBlockComponent {
  public title =
    'blok z długą nazwą która sama się przytnie gdy będzie dłuższa niż dostępne miejscę';

  constructor(public textContentService: TextContentService) {}
}
