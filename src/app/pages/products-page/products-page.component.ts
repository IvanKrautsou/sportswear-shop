import {Component, OnInit} from '@angular/core';
import {Product} from '../../product';
import {ProductsService} from '../../core/services/products-service/products.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-products-page',
  templateUrl: './products-page.component.html',
  styleUrls: ['./products-page.component.scss']
})
export class ProductsPageComponent implements OnInit {

  public products$: Observable<Product[]>;

  constructor(private productService: ProductsService) {
  }

  ngOnInit() {
    this.products$ = this.productService.getFilteredProducts();
  }

}
