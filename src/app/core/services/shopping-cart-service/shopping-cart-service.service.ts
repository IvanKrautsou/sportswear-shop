import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartServiceService {

  private _selectedProductsIdList: BehaviorSubject<number[]> = new BehaviorSubject([]);

  toggleProduct(productId: number): void {
    if (this._selectedProductsIdList.value.includes(productId)) {
      this._selectedProductsIdList.next(this._selectedProductsIdList.value.filter(item => item !== productId));
    } else {
      this._selectedProductsIdList.next([...this._selectedProductsIdList.value, productId]);
    }
    console.log(this._selectedProductsIdList.value);
  }

  isProductSelected(id: number): Observable<boolean> {
    return this._selectedProductsIdList.pipe(map(idList => idList.includes(id)));
  }

  amountOfSelectedProducts(): Observable<number> {
    return this._selectedProductsIdList.pipe(map(products => products.length));
  }

  constructor() {
  }
}
