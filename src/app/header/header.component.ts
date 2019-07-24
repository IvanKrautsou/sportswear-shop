import {Component, OnInit} from '@angular/core';
import {ShoppingCartServiceService} from '../core/services/shopping-cart-service/shopping-cart-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private shoppingCartService: ShoppingCartServiceService) {
  }

  ngOnInit() {
  }

}
