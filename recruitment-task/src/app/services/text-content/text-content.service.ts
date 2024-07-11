import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { OptionValue, OptionService } from '../option-service/option.service';

export type TextRecord = {
  id: number;
  text: string;
};

@Injectable({
  providedIn: 'root',
})
export class TextContentService {
  private selectedOption?: OptionValue;
  private readonly _textContent = new BehaviorSubject<TextRecord[]>([
    { id: 1, text: 'Pierwszy text' },
  ]);
  readonly textContent$ = this._textContent.asObservable();

  constructor(optionService: OptionService) {
    optionService.selectedOption$.subscribe(
      (selectedOption) => (this.selectedOption = selectedOption)
    );
  }

  get textContent(): TextRecord[] {
    return this._textContent.getValue();
  }

  private set textContent(val: TextRecord[]) {
    this._textContent.next(val);
  }

  addTextContent(textRecord: TextRecord): void {
    console.log(this.selectedOption);
    this.textContent = [...this.textContent, textRecord];
  }

  removeTodo(id: number) {
    this.textContent = this.textContent.filter(
      (textRecord) => textRecord.id !== id
    );
  }
}
