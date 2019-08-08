import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {Product} from '../../product';
import {ShoppingCartService} from '../../core/services/shopping-cart-service/shopping-cart.service';
import {CheckoutService} from '../../core/services/checkout-service/checkout.service';

@Component({
  selector: 'app-shopping-cart-page',
  templateUrl: './shopping-cart-page.component.html',
  styleUrls: ['./shopping-cart-page.component.scss'],
  providers: [CheckoutService]
})
export class ShoppingCartPageComponent implements OnInit {

  constructor(private shoppingCartService: ShoppingCartService,
              private  checkoutService: CheckoutService) {
  }

  private products$: Observable<Product[]>;

  totalPrice$: Observable<number>;

  amountOfSelectedProducts$: Observable<number>;

  ngOnInit() {
    this.products$ = this.shoppingCartService.getSelectedProducts();
    this.totalPrice$ = this.checkoutService.getTotalPrice();
    this.amountOfSelectedProducts$ = this.shoppingCartService.amountOfSelectedProducts();
  }

  toggleProductInOrder(id: number) {
    this.checkoutService.toggleIds(id);
  }

  checkout() {
    this.checkoutService.checkout();
    this.shoppingCartService.cleanCart();
  }

}
