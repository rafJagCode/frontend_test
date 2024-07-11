import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export enum OptionValue {
  First = 'FIRST',
  Second = 'SECOND',
  Random = 'RANDOM',
}
export type Option = {
  id: number;
  label: string;
  value: OptionValue;
};

@Injectable({
  providedIn: 'root',
})
export class OptionService {
  private readonly _selectedOption = new BehaviorSubject<OptionValue>(
    OptionValue.First
  );
  readonly selectedOption$ = this._selectedOption.asObservable();

  get selectedOption(): OptionValue {
    return this._selectedOption.getValue();
  }

  private set selectedOption(val: OptionValue) {
    this._selectedOption.next(val);
  }
}
