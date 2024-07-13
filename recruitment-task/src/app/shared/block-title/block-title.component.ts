import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-block-title',
  standalone: true,
  imports: [],
  templateUrl: './block-title.component.html',
  styleUrl: './block-title.component.scss',
  host: { class: 'block-title' },
})
export class BlockTitleComponent {
  @Input() text?: string;
}
