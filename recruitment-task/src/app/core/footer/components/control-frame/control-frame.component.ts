import { Component, HostBinding, Input } from '@angular/core';
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
  @HostBinding('class.control-frame--show') @Input() show: boolean = false;

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
