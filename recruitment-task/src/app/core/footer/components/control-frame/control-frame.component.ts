import { Component, HostBinding, Input } from '@angular/core';

@Component({
  selector: 'app-control-frame',
  standalone: true,
  imports: [],
  templateUrl: './control-frame.component.html',
  styleUrl: './control-frame.component.scss',
  host: { class: 'control-frame' },
})
export class ControlFrameComponent {
  @HostBinding('class.control-frame--show') @Input() show: boolean = false;
}
