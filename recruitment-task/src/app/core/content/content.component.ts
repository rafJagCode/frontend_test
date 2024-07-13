import { Component } from '@angular/core';
import { FirstBlockComponent } from '../../features/first-block/first-block.component';
import { SecondBlockComponent } from '../../features/second-block/second-block.component';
import { ThirdBlockComponent } from '../../features/third-block/third-block.component';

@Component({
  selector: '[app-content]',
  standalone: true,
  imports: [FirstBlockComponent, SecondBlockComponent, ThirdBlockComponent],
  templateUrl: './content.component.html',
  styleUrl: './content.component.scss',
  host: { class: 'content' },
})
export class ContentComponent {}
