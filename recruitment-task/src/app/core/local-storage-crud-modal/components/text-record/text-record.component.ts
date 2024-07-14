import {
  Component,
  ElementRef,
  Input,
  QueryList,
  ViewChildren,
} from '@angular/core';
import { TextRecord } from '../../../../services/text-content/text-content.service';
import { TextRecordButtonComponent } from '../text-record-button/text-record-button.component';
import { LocalStorageService } from './../../../../services/local-storage/local-storage.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-text-record',
  standalone: true,
  imports: [FormsModule, TextRecordButtonComponent],
  templateUrl: './text-record.component.html',
  styleUrl: './text-record.component.scss',
  host: { class: 'text-record' },
})
export class TextRecordComponent {
  @Input() textRecord!: TextRecord;
  @ViewChildren('textarea') public textarea: QueryList<ElementRef>;
  public isEditingEnabled = false;

  constructor(public localStorageService: LocalStorageService) {}

  ngAfterViewInit(): void {
    this.textarea.changes.subscribe(() => {
      if (this.textarea.last) this.textarea.last.nativeElement.focus();
    });
  }

  edit = () => {
    this.isEditingEnabled = true;
  };

  remove = () => {
    this.localStorageService.removeTextRecord(this.textRecord.id);
  };

  update = () => {
    this.isEditingEnabled = false;
    this.localStorageService.editTextRecord(this.textRecord);
  };
}
