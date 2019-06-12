import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  public product = {
    name: 'T-shirt',
    price: 'men',
    size: 'size',
    img: '../../../../../public/products/T-shirt.png',
    sex: 'men',
    id: 1
  };

  constructor() { }

  ngOnInit() {
  }

}
