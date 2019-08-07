import {Component, OnInit} from '@angular/core';
import {Product} from '../../product';
import {ProductsService} from '../../core/services/products-service/products.service';
import {Observable} from 'rxjs';
import {ShoppingCartService} from '../../core/services/shopping-cart-service/shopping-cart.service';
import {map, switchMap} from 'rxjs/operators';

export interface ProductView extends Product {
  isProductInCart: boolean;
}

@Component({
  selector: 'app-products-page',
  templateUrl: './products-page.component.html',
  styleUrls: ['./products-page.component.scss']
})
export class ProductsPageComponent implements OnInit {

  public products$: Observable<ProductView[]>;

  constructor(
    private productService: ProductsService,
    private shoppingCartService: ShoppingCartService) {
  }


  ngOnInit() {

    const getProductView = (products) => {
      return this.shoppingCartService.selectedProductsIds$.pipe(
        map(ids => {
            return products.map(product => ({...product, isProductInCart: ids.includes(product.id)}));
          }
        ));
    };

    this.products$ = this.productService.getFilteredProducts().pipe(switchMap(getProductView));

  }

}
