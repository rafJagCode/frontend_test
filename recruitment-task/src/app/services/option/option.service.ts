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
  private readonly _selectedOption = new BehaviorSubject<OptionValue | null>(
    null
  );
  readonly selectedOption$ = this._selectedOption.asObservable();

  get selectedOption(): OptionValue | null {
    return this._selectedOption.getValue();
  }

  private set selectedOption(val: OptionValue | null) {
    this._selectedOption.next(val);
  }

  reset() {
    this.selectedOption = null;
  }
}
