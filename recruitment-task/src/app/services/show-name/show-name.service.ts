import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ShowNameService {
  private INITIAL = false;
  private readonly _showName = new BehaviorSubject<boolean>(this.INITIAL);
  readonly showName$ = this._showName.asObservable();

  get showName(): boolean {
    return this._showName.getValue();
  }

  private set showName(val: boolean) {
    this._showName.next(val);
  }

  show() {
    this.showName = true;
  }

  reset() {
    this.showName = this.INITIAL;
  }
}
