import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-text-record-button',
  standalone: true,
  imports: [],
  templateUrl: './text-record-button.component.html',
  styleUrl: './text-record-button.component.scss',
  host: { class: 'text-record-button' },
})
export class TextRecordButtonComponent {
  @Input() text: string = '';
  @Input() clickFunction!: Function;
}
