import { Component } from '@angular/core';
import { ControlFrameComponent } from '../control-frame/control-frame.component';

@Component({
  selector: 'app-show-button',
  standalone: true,
  imports: [ControlFrameComponent],
  templateUrl: './show-button.component.html',
  styleUrl: './show-button.component.scss',
  host: { class: 'show-button' },
})
export class ShowButtonComponent {
  public show = false;

  onCloseControlFrame() {
    if (this.show) this.show = !this.show;
  }
}
