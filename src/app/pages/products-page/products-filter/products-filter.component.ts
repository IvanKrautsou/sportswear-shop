import {Component, OnInit} from '@angular/core';
import {ProductsFilterService} from '../../../core/services/products-filter-service/products-filter.service';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {Sex} from '../../../product';

interface SexesCheckedMap {
  [Sex.men]: Observable<boolean>;
  [Sex.children]: Observable<boolean>;
  [Sex.women]: Observable<boolean>;
}


@Component({
  selector: 'app-products-filter',
  templateUrl: './products-filter.component.html',
  styleUrls: ['./products-filter.component.scss']
})
export class ProductsFilterComponent implements OnInit {

  constructor(private productsFilterService: ProductsFilterService) {
  }

  public sexesList$: Observable<Sex[]>;

  public sex = Sex;

  sexesChecked: SexesCheckedMap;

  private toggleSex(sex: Sex): void {
    this.productsFilterService.toggleSex(sex);
  }

  private seeAllProducts(): void {
    this.productsFilterService.seeAllProducts();
  }

  ngOnInit() {
    this.sexesList$ = this.productsFilterService.sexesList;
    this.sexesChecked = {
      [Sex.men]: this.sexesList$.pipe(map(sexes => sexes.includes(Sex.men))),
      [Sex.women]: this.sexesList$.pipe(map(sexes => sexes.includes(Sex.women))),
      [Sex.children]: this.sexesList$.pipe(map(sexes => sexes.includes(Sex.children))),
    };
  }

}
