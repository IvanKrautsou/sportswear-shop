import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartServiceService {

  private _selectedProductsList: BehaviorSubject<Array<number>> = new BehaviorSubject<Array<number>>([]);

  toggleProduct(productId: number): void {
    if (this._selectedProductsList.value.includes(productId)) {
      this._selectedProductsList.next(this._selectedProductsList.value.filter(item => item !== productId));
    } else {
      this._selectedProductsList.next([...this._selectedProductsList.value, productId]);
    }
    console.log(this._selectedProductsList.value);
  }

  isProductSelected(id: number): boolean {
    return this._selectedProductsList.value.includes(id);
  }

  amountOfSelectedProducts(): number {
    return this._selectedProductsList.value.length;
  }

  constructor() {
  }
}
