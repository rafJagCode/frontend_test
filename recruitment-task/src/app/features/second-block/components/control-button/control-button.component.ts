import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-control-button',
  standalone: true,
  imports: [],
  templateUrl: './control-button.component.html',
  styleUrl: './control-button.component.scss',
})
export class ControlButtonComponent {
  @Input() text?: string;
  @Input() clickFunction?: Function;

  handleClick(): void {
    if (this.clickFunction && typeof this.clickFunction === 'function')
      this.clickFunction();
  }
}
