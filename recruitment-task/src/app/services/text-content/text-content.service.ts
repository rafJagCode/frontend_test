import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { OptionValue, OptionService } from '../option/option.service';
import getRandomInt from '../../utils/getRandomInt';
import sortAlphabetically from '../../utils/sortAlphabetically';
import data from '../../../assets/data.json';

export type TextRecord = {
  id: number;
  text: string;
};

enum Skip {
  FirstAndSecond = 'FIRST_AND_SECOND',
  None = 'NONE',
}

enum Source {
  Data = 'DATA',
  TextContent = 'TEXT_CONTENT',
}

@Injectable({
  providedIn: 'root',
})
export class TextContentService {
  private readonly data: TextRecord[] = data;
  private selectedOption: OptionValue | null = null;
  private readonly _textContent = new BehaviorSubject<Set<TextRecord>>(
    new Set()
  );
  readonly textContent$ = this._textContent.asObservable();

  constructor(optionService: OptionService) {
    optionService.selectedOption$.subscribe(
      (selectedOption) => (this.selectedOption = selectedOption)
    );
  }

  get textContent(): Set<TextRecord> {
    return this._textContent.getValue();
  }

  private set textContent(val: Set<TextRecord>) {
    this._textContent.next(val);
  }

  private getRandomFromData(skip: Skip): TextRecord {
    const minIndex = skip === Skip.FirstAndSecond ? 2 : 0;
    const maxIndex = this.data.length;

    return this.data[getRandomInt(minIndex, maxIndex)];
  }

  private getRandomFromTextContent(skip: Skip): TextRecord {
    const textRecords = [...this.textContent];
    const minIndex = 0;
    const maxIndex = textRecords.length;
    const textRecord = textRecords[getRandomInt(minIndex, maxIndex)];
    if (
      skip === Skip.FirstAndSecond &&
      (textRecord === this.data[0] || textRecord === this.data[1])
    )
      return this.getRandomFromTextContent(skip);
    return textRecord;
  }

  private getRandomTextRecord(source: Source, skip: Skip): TextRecord {
    if (source === Source.Data) return this.getRandomFromData(skip);
    return this.getRandomFromTextContent(skip);
  }

  private getTextRecord(source: Source, skip: Skip = Skip.None) {
    let textRecord: TextRecord | null;
    switch (this.selectedOption) {
      case OptionValue.First: {
        textRecord = this.data[0];
        break;
      }
      case OptionValue.Second: {
        textRecord = this.data[1];
        break;
      }
      case OptionValue.Random: {
        textRecord = this.getRandomTextRecord(source, skip);
        break;
      }
      default: {
        textRecord = null;
        alert('Nieprawidłowa opcja');
      }
    }
    return textRecord;
  }

  private isAppendingPossible() {
    if (this.textContent.size === this.data.length) return false;
    if (
      this.selectedOption === OptionValue.First &&
      this.textContent.has(this.data[0])
    )
      return false;
    if (
      this.selectedOption === OptionValue.Second &&
      this.textContent.has(this.data[1])
    )
      return false;
    if (this.selectedOption === OptionValue.Random) {
      for (let i = 2; i < this.data.length; i++) {
        if (!this.textContent.has(this.data[i])) return true;
      }
      return false;
    }
    return true;
  }

  private isReplacingPossible() {
    if (this.textContent.size === 0) return false;
    if (this.textContent.size === this.data.length) return false;
    if (
      this.selectedOption === OptionValue.First &&
      !this.textContent.has(this.data[0])
    )
      return false;
    if (
      this.selectedOption === OptionValue.Second &&
      !this.textContent.has(this.data[1])
    )
      return false;
    if (this.selectedOption === OptionValue.Random) {
      for (const textRecord of this.textContent) {
        if (textRecord !== this.data[0] && textRecord !== this.data[1])
          return true;
      }
      return false;
    }
    return true;
  }

  appendTextRecord(): void {
    if (!this.isAppendingPossible()) {
      alert('Operacja nie może być wykonana');
      return;
    }

    let textRecord = null;
    while (!textRecord || this.textContent.has(textRecord)) {
      textRecord = this.getTextRecord(Source.Data, Skip.FirstAndSecond);
      if (!textRecord) return;
    }

    const sorted = sortAlphabetically(
      [...this.textContent, textRecord],
      'text'
    );

    this.textContent = new Set(sorted);
  }

  replaceTextRecord() {
    if (!this.isReplacingPossible()) {
      alert('Operacja nie może być wykonana');
      return;
    }

    const oldTextRecord = this.getTextRecord(
      Source.TextContent,
      Skip.FirstAndSecond
    );
    let newTextRecord = null;

    while (!newTextRecord || this.textContent.has(newTextRecord)) {
      newTextRecord = this.data[getRandomInt(0, this.data.length)];
      if (!newTextRecord) return;
    }

    const newTextContent = [...this.textContent].map((textRecord) => {
      if (textRecord === oldTextRecord) return newTextRecord;
      return textRecord;
    });

    this.textContent = new Set(newTextContent);
  }

  reset() {
    this.textContent = new Set();
  }
}
