import {Component, OnInit} from '@angular/core';
import {ProductsFilterService} from '../../../core/services/products-filter-service/products-filter.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-products-filter',
  templateUrl: './products-filter.component.html',
  styleUrls: ['./products-filter.component.scss']
})
export class ProductsFilterComponent implements OnInit {

  public sexesList$: Observable<Array<string>>;

  constructor(public productsFilterService: ProductsFilterService) {
  }

  private toggleSex(sex: string): void {
    this.productsFilterService.toggleSex(sex);
  }

  ngOnInit() {
    this.sexesList$ = this.productsFilterService.sexesList;
  }

}
