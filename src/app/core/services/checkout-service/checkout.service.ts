import {NgModule} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {map, switchMap} from 'rxjs/operators';
import {ProductsServiceService} from '../products-service/products-service.service';


@NgModule({
  providers: [
    ProductsServiceService
  ],
})

export class CheckoutService {

  constructor(private productsService: ProductsServiceService) {
  }

  private _checkedProductsIds: BehaviorSubject<number[]> = new BehaviorSubject([]);

  public readonly checkedProductsIds: Observable<number[]> = this._checkedProductsIds.asObservable();

  toggleIds(id: number) {
    if (this._checkedProductsIds.value.includes(id)) {
      this._checkedProductsIds.next(this._checkedProductsIds.value.filter(item => item !== id));
    } else {
      this._checkedProductsIds.next([...this._checkedProductsIds.value, id]);
    }
  }

  getTotalPrice(): Observable<number> {
    return this.checkedProductsIds.pipe(
      switchMap(ids => this.productsService.getProductsByIds(ids)),
      map(products => products
        .map(product => +product.price)
        .reduce((s, c) => s + c, 0)
      )
    );
  }

  checkout() {
    alert('Your order is issued');
  }

}
