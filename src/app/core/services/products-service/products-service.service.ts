import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ProductsFilterService} from '../products-filter-service/products-filter.service';
import {switchMap, map} from 'rxjs/operators';
import {Product} from '../../../product';
import {Observable} from 'rxjs';

const PRODUCTS_URL = 'assets/products.json';

@Injectable({
  providedIn: 'root'
})
export class ProductsServiceService {

  constructor(
    private http: HttpClient,
    private productsFilterService: ProductsFilterService) {
  }

  private getAllProducts(): Observable<Product[]> {
    return this.http.get(PRODUCTS_URL) as Observable<Product[]>;
  }

  getFilteredProducts() {
    const getProductsBySexes = (products) => {
      return this.productsFilterService.sexesList.pipe(
        map(sexes => {
          return products.filter(product => sexes.includes(product.sex));
        })
      );
    };

    return this.getAllProducts().pipe(
      switchMap(getProductsBySexes)
    );
  }
}


