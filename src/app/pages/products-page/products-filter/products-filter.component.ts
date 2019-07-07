import { Component, OnInit } from '@angular/core';
import { ProductsFilterService } from './products-filter.service';

@Component({
  selector: 'app-products-filter',
  templateUrl: './products-filter.component.html',
  styleUrls: ['./products-filter.component.scss']
})
export class ProductsFilterComponent implements OnInit {

  public sexesList = [];

  constructor( public productsFilterService: ProductsFilterService ) { }

  toggleSex(e): void {
    this.productsFilterService.toggleSex(e);
  }

  ngOnInit() {
    this.productsFilterService.sexesList.subscribe(list => this.sexesList = list);
  }

}
