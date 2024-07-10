import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-block-title',
  standalone: true,
  imports: [],
  templateUrl: './block-title.component.html',
  styleUrl: './block-title.component.scss',
})
export class BlockTitleComponent {
  @Input() text?: string;
}
