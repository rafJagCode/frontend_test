import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BlockTitleComponent } from '../../shared/block-title/block-title.component';

@Component({
  selector: 'app-first-block',
  standalone: true,
  imports: [FormsModule, BlockTitleComponent],
  templateUrl: './first-block.component.html',
  styleUrl: './first-block.component.scss',
})
export class FirstBlockComponent {
  title = 'block pierwszy';
  options = [
    { id: 1, label: 'Opcja pierwsza', value: 'first' },
    { id: 2, label: 'Opcja druga', value: 'second' },
    { id: 3, label: 'Opcja losowa', value: 'random' },
  ];
  selectedOption: any;
}
