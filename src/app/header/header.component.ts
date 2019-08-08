import {Component, OnInit} from '@angular/core';
import {ShoppingCartService} from '../core/services/shopping-cart-service/shopping-cart.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private shoppingCartService: ShoppingCartService) {
  }

  amountOfSelectedProducts$: Observable<number>;

  ngOnInit() {
    this.amountOfSelectedProducts$ = this.shoppingCartService.amountOfSelectedProducts();
  }

}
