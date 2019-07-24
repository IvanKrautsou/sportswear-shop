import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {Product} from '../../product';
import {ShoppingCartServiceService} from '../../core/services/shopping-cart-service/shopping-cart-service.service';

@Component({
  selector: 'app-shopping-cart-page',
  templateUrl: './shopping-cart-page.component.html',
  styleUrls: ['./shopping-cart-page.component.scss']
})
export class ShoppingCartPageComponent implements OnInit {

  constructor(private shoppingCartService: ShoppingCartServiceService) {
  }

  private products$: Observable<Product[]>;

  ngOnInit() {
    this.products$ = this.shoppingCartService.getSelectedProducts();

  }

}
