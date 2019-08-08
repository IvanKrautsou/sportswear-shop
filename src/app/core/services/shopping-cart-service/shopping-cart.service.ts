import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {ProductsService} from '../products-service/products.service';
import {map, switchMap} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

  constructor(private productsService: ProductsService) {
  }

  private _selectedProductsIds: BehaviorSubject<number[]> = new BehaviorSubject([]);

  public readonly selectedProductsIds$: Observable<number[]> = this._selectedProductsIds.asObservable();

  toggleProduct(productId: number): void {
    if (this._selectedProductsIds.value.includes(productId)) {
      this._selectedProductsIds.next(this._selectedProductsIds.value.filter(item => item !== productId));
    } else {
      this._selectedProductsIds.next([...this._selectedProductsIds.value, productId]);
    }
  }

  addProductToCart(productId: number): void {
    if (!this._selectedProductsIds.value.includes(productId)) {
      this._selectedProductsIds.next([...this._selectedProductsIds.value, productId]);
    }
  }

  isProductSelected(id: number): Observable<boolean> {
    return this.selectedProductsIds$.pipe(map(idList => idList.includes(id)));
  }

  amountOfSelectedProducts(): Observable<number> {
    return this.selectedProductsIds$.pipe(map(products => products.length));
  }

  getSelectedProducts() {
    const getProductsById = (products) => {
      return this.selectedProductsIds$.pipe(
        map(id => products.filter(product => id.includes(product.id)))
      );
    };

    return this.productsService.getAllProducts().pipe(
      switchMap(getProductsById)
    );
  }

  cleanCart() {
    this._selectedProductsIds.next([]);
  }
}
