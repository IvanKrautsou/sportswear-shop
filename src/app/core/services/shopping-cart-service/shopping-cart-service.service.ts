import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {ProductsServiceService} from '../products-service/products-service.service';
import {map, switchMap} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ShoppingCartServiceService {

  constructor(private productsService: ProductsServiceService) {
  }

  private _selectedProductsIdList: BehaviorSubject<number[]> = new BehaviorSubject([]);

  public readonly selectedProductsIdList: Observable<number[]> = this._selectedProductsIdList.asObservable();

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

  getSelectedProducts() {
    const getProductsById = (products) => {
      return this.selectedProductsIdList.pipe(
        map(id => {
          return products.filter(product => id.includes(product.id));
        })
      );
    };

    return this.productsService.getAllProducts().pipe(
      switchMap(getProductsById)
    );

  }
}
