import {Component, OnInit, Input} from '@angular/core';
import {Product} from '../../../product';
import {ShoppingCartService} from '../../../core/services/shopping-cart-service/shopping-cart.service';

@Component({
  selector: 'app-goods',
  templateUrl: './goods.component.html',
  styleUrls: ['./goods.component.scss']
})
export class GoodsComponent implements OnInit {

  @Input() products: Product[];

  constructor(private shoppingCartService: ShoppingCartService) {
  }

  ngOnInit() {
  }

}
