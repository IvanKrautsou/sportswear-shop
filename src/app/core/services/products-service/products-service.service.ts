import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductsFilterService } from '../products-filter-service/products-filter.service';
import { switchMap, map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ProductsServiceService {

  constructor(
    private http: HttpClient,
    public productsFilterService: ProductsFilterService) { }

  getAllProducts() {
    return this.http.get('assets/products.json');
  }

  getFilteredProducts() {
    this.getAllProducts().pipe(
      switchMap(products => {
        return this.productsFilterService.sexesList.pipe(
          map(sexes => {
            products.filter( product => sexes.includes(product.sex));
          })
        );
      })
    );
  }
}


