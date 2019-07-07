import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsFilterService {

  private _sexesList: BehaviorSubject<Array<string>> = new BehaviorSubject(['men', 'women', 'children']);

  public readonly sexesList: Observable<Array<string>> = this._sexesList.asObservable();

  toggleSex(sex) {
    if (this._sexesList.value.includes(sex)) {
      this._sexesList.next(this._sexesList.value.filter(str => str !== sex));
    } else {
      this._sexesList.next([...this._sexesList.value, sex]);
    }
  }

  constructor() { }
}
