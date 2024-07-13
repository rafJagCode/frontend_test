import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BlockTitleComponent } from '../../shared/block-title/block-title.component';
import {
  Option,
  OptionValue,
  OptionService,
} from '../../services/option/option.service';

@Component({
  selector: 'app-first-block',
  standalone: true,
  imports: [FormsModule, BlockTitleComponent],
  templateUrl: './first-block.component.html',
  styleUrl: './first-block.component.scss',
  host: { class: 'first-block' },
})
export class FirstBlockComponent {
  public title = 'blok pierwszy';
  public options: Option[] = [
    { id: 1, label: 'Opcja pierwsza', value: OptionValue.First },
    { id: 2, label: 'Opcja druga', value: OptionValue.Second },
    { id: 3, label: 'Opcja losowa', value: OptionValue.Random },
  ];
  constructor(public optionService: OptionService) {}
}
