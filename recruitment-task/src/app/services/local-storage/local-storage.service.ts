import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { TextRecord } from '../text-content/text-content.service';
import data from '../../../assets/data.json';
import { v4 as uuid } from 'uuid';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  private readonly data: TextRecord[] = data.map((text) => ({
    id: uuid(),
    text,
  })) as unknown as TextRecord[];
  private localStorageKey = 'RECRUITMENT_TEST_TEXTDATA';
  private readonly _localStorageData = new BehaviorSubject<TextRecord[]>([]);
  readonly localStorageData$ = this._localStorageData.asObservable();

  constructor() {
    this.initializeData();
  }

  get localStorageData(): TextRecord[] {
    return this._localStorageData.getValue();
  }

  private set localStorageData(val: TextRecord[]) {
    localStorage.setItem(this.localStorageKey, JSON.stringify(val));
    this._localStorageData.next(val);
  }

  private initializeData(): void {
    const localStorageValue = localStorage.getItem(this.localStorageKey);
    if (!localStorageValue) {
      localStorage.setItem(this.localStorageKey, JSON.stringify(this.data));
      this.localStorageData = this.data;
    } else this.localStorageData = JSON.parse(localStorageValue);
  }

  addTextRecord(textRecord: TextRecord): void {
    this.localStorageData = [...this.localStorageData, textRecord];
  }

  editTextRecord(editedTextRecord: TextRecord): void {
    this.localStorageData = this.localStorageData.map((textRecord) => {
      if (textRecord.id === editedTextRecord.id) return editedTextRecord;
      return textRecord;
    });
  }

  removeTextRecord(textRecordId: string): void {
    this.localStorageData = this.localStorageData.filter(
      (textRecord) => textRecord.id !== textRecordId
    );
  }
}
