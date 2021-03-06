import {Component, OnInit} from '@angular/core';
import {Product} from '../../product';
import {ProductsService} from '../../core/services/products-service/products.service';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {ActivatedRoute} from '@angular/router';
import {ShoppingCartService} from '../../core/services/shopping-cart-service/shopping-cart.service';

@Component({
  selector: 'app-product-info-page',
  templateUrl: './product-info-page.component.html',
  styleUrls: ['./product-info-page.component.scss']
})
export class ProductInfoPageComponent implements OnInit {

  product$: Observable<Product>;

  constructor(
    private route: ActivatedRoute,
    private productsService: ProductsService,
    private shoppingCartService: ShoppingCartService
  ) {
  }

  addProductToCart(productId) {
    this.shoppingCartService.addProductToCart(productId);
    alert('A new item has been added to your Shopping Cart.');
  }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('productId');

    this.product$ = this.productsService.getProductsByIds([id])
      .pipe(map(products => products[0]));
  }

}
