import {Component, OnInit, Input} from '@angular/core';
import {Product} from '../../../product';
import {ShoppingCartServiceService} from '../../../core/services/shopping-cart-service/shopping-cart-service.service';

@Component({
  selector: 'app-goods',
  templateUrl: './goods.component.html',
  styleUrls: ['./goods.component.scss']
})
export class GoodsComponent implements OnInit {

  @Input() products: Product[];

  constructor(private shoppingCartService: ShoppingCartServiceService) {
  }

  private toggleProductInCart(id: number): void {
    this.shoppingCartService.toggleProduct(id);
  }

  ngOnInit() {
  }

}
