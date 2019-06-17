import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-products-page',
  templateUrl: './products-page.component.html',
  styleUrls: ['./products-page.component.scss']
})
export class ProductsPageComponent implements OnInit {

  public products = [];

  constructor(private http: HttpClient) { }

  getProducts() {
    return this.http.get('assets/products.json');
  }

  ngOnInit() {
    this.getProducts()
      .subscribe((products: any[]) => this.products = products);
  }

}
