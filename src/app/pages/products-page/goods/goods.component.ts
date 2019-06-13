import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-goods',
  templateUrl: './goods.component.html',
  styleUrls: ['./goods.component.scss']
})
export class GoodsComponent implements OnInit {

  public products = [
    {
      name: 'T-shirt',
      price: 'men',
      size: 'size',
      img: '../../../../assets/images/products/T-shirt.png',
      sex: 'men',
      id: 1
    },
    {
      name: 'Pants FORCLAZ',
      price: 'children',
      size: 'size',
      img: '../../../../assets/images/products/Pants.png',
      sex: 'children',
      id: 2
    },
    {
      name: 'Pants FORCLAZ',
      price: 'men',
      size: '10litri',
      img: '../../../../assets/images/products/backpack.png',
      sex: 'men',
      id: 3
    },
    {
      name: 'T-shirt',
      price: 'women',
      size: 'size',
      img: '../../../../assets/images/products/T-shirt.png',
      sex: 'women',
      id: 4
    },
    {
      name: 'Pants FORCLAZ',
      price: 'children',
      size: '10litri',
      img: '../../../../assets/images/products/backpack.png',
      sex: 'children',
      id: 5
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
