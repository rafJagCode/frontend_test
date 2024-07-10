import { Component } from '@angular/core';
import { FirstBlockComponent } from '../../features/first-block/first-block.component';

@Component({
  selector: '[app-content]',
  standalone: true,
  imports: [FirstBlockComponent],
  templateUrl: './content.component.html',
  styleUrl: './content.component.scss',
})
export class ContentComponent {}
