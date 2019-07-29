import {Component, OnInit} from '@angular/core';
import {ProductsFilterService, Sex} from '../../../core/services/products-filter-service/products-filter.service';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';


@Component({
  selector: 'app-products-filter',
  templateUrl: './products-filter.component.html',
  styleUrls: ['./products-filter.component.scss']
})
export class ProductsFilterComponent implements OnInit {

  public sexesList$: Observable<Sex[]>;

  checked(sex: number): Observable<boolean> {
    return this.sexesList$.pipe(map(sexes => sexes.includes(sex)));
  }

  constructor(private productsFilterService: ProductsFilterService) {
  }

  private toggleSex(sex: Sex): void {
    this.productsFilterService.toggleSex(sex);
  }

  private seeAllProducts(): void {
    this.productsFilterService.seeAllProducts();
  }

  ngOnInit() {
    this.sexesList$ = this.productsFilterService.sexesList;
  }

}
