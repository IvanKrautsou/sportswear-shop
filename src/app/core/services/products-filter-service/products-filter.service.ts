import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {Sex} from '../../../product';

@Injectable({
  providedIn: 'root'
})
export class ProductsFilterService {

  private _sexesList: BehaviorSubject<Sex[]> = new BehaviorSubject([Sex.men, Sex.women, Sex.children]);

  public readonly sexesList: Observable<Sex[]> = this._sexesList.asObservable();

  toggleSex(sex: Sex): void {
    if (this._sexesList.value.includes(sex)) {
      this._sexesList.next(this._sexesList.value.filter(str => str !== sex));
    } else {
      this._sexesList.next([...this._sexesList.value, sex]);
    }
  }

  seeAllProducts(): void {
    this._sexesList.next([Sex.men, Sex.women, Sex.children]);
  }

  constructor() {
  }
}
