import {
  Component,
  ElementRef,
  EventEmitter,
  HostBinding,
  HostListener,
  Input,
  Output,
} from '@angular/core';
import { TextContentService } from '../../../../services/text-content/text-content.service';
import { ShowNameService } from '../../../../services/show-name/show-name.service';
import { OptionService } from '../../../../services/option/option.service';

@Component({
  selector: 'app-control-frame',
  standalone: true,
  imports: [],
  templateUrl: './control-frame.component.html',
  styleUrl: './control-frame.component.scss',
  host: { class: 'control-frame' },
})
export class ControlFrameComponent {
  @Input() button: HTMLButtonElement;
  @Output() closeControlFrame = new EventEmitter();
  @HostBinding('class.control-frame--show') @Input() show: boolean = false;
  @HostListener('click', ['$event'])
  clickInside(event: MouseEvent) {
    event.stopPropagation();
  }

  @HostListener('document:click', ['$event'])
  clickOutside(event: MouseEvent) {
    if (this.button && this.button.contains(event.target as Node)) return;
    this.closeControlFrame.emit();
  }

  constructor(
    public textContentService: TextContentService,
    public showNameService: ShowNameService,
    public optionService: OptionService
  ) {}

  reset() {
    this.textContentService.reset();
    this.showNameService.reset();
    this.optionService.reset();
  }

  showName() {
    this.showNameService.show();
  }

  openLocalStorageCrudModal() {
    const localStorageCrudModal = document.getElementById(
      'localStorageCrudModal'
    ) as HTMLDialogElement;
    if (localStorageCrudModal) localStorageCrudModal.showModal();
  }
}
