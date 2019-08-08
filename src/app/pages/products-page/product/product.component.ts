import {Component, OnInit, Input} from '@angular/core';
import {Product} from '../../../product';
import {ShoppingCartService} from '../../../core/services/shopping-cart-service/shopping-cart.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  @Input() product: Product;

  constructor(private shoppingCartService: ShoppingCartService) {
  }

  private toggleProductInCart(id: number): void {
    this.shoppingCartService.toggleProduct(id);
  }

  ngOnInit() {
  }

}
