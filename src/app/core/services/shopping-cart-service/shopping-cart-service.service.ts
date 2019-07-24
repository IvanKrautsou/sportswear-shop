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

  private _selectedProductsList: BehaviorSubject<Array<number>> = new BehaviorSubject<Array<number>>([]);

  public readonly selectedProductsList: Observable<Array<number>> = this._selectedProductsList.asObservable();

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

  getSelectedProducts() {
    const getProductsById = (products) => {
      return this.selectedProductsList.pipe(
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
