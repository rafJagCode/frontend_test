import { Component } from '@angular/core';
import { TextRecord } from '../../services/text-content/text-content.service';
import { LocalStorageService } from '../../services/local-storage/local-storage.service';
import { TextRecordComponent } from './components/text-record/text-record.component';
import { v4 as uuid } from 'uuid';

@Component({
  selector: 'app-local-storage-crud-modal',
  standalone: true,
  imports: [TextRecordComponent],
  templateUrl: './local-storage-crud-modal.component.html',
  styleUrl: './local-storage-crud-modal.component.scss',
  host: {
    class: 'local-storage-crud-modal',
  },
})
export class LocalStorageCrudModalComponent {
  public data: TextRecord[] = [];
  constructor(public localStorageService: LocalStorageService) {
    localStorageService.localStorageData$.subscribe((data) => {
      this.data = data;
    });
  }

  add() {
    this.localStorageService.addTextRecord({
      id: uuid(),
      text: 'Wpisz tu własny text',
    });
  }
}
