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
export class ProductsService {

  constructor(
    private http: HttpClient,
    private productsFilterService: ProductsFilterService) {
  }

  public getAllProducts(): Observable<Product[]> {
    return this.http.get(PRODUCTS_URL) as Observable<Product[]>;
  }

  getFilteredProducts(): Observable<Product[]> {
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

  getProductsByIds(ids: number[]): Observable<Product[]> {
    return this.getAllProducts().pipe(map(products => products.filter(product => ids.includes(product.id))));
  }
}


