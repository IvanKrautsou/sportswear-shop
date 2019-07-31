import {Component, OnDestroy, OnInit} from '@angular/core';
import {Product} from '../../product';
import {ProductsServiceService} from '../../core/services/products-service/products-service.service';
import {Subscription} from 'rxjs';
import {map} from 'rxjs/operators';
import {ActivatedRoute} from '@angular/router';
import {ShoppingCartServiceService} from '../../core/services/shopping-cart-service/shopping-cart-service.service';

@Component({
  selector: 'app-product-info-page',
  templateUrl: './product-info-page.component.html',
  styleUrls: ['./product-info-page.component.scss']
})
export class ProductInfoPageComponent implements OnInit, OnDestroy {

  product: Product;

  subscription: Subscription;

  constructor(
    private route: ActivatedRoute,
    private productsService: ProductsServiceService,
    private shoppingCartService: ShoppingCartServiceService
  ) {
  }

  addProductToCart(productId) {
    this.shoppingCartService.addProductToCart(productId);
    alert('A new item has been added to your Shopping Cart.');
  }

  getProduct(): void {
    const id = +this.route.snapshot.paramMap.get('productId');

    this.subscription = this.productsService.getProductsByIds([id])
      .pipe(map(products => products[0]))
      .subscribe(product => this.product = product);
  }

  ngOnInit() {
    this.getProduct();
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
      this.subscription = null;
    }
  }

}
