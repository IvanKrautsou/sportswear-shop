import {Component, Input, OnInit} from '@angular/core';
import {ProductView} from '../products-page.component';

@Component({
  selector: 'app-goods',
  templateUrl: './goods.component.html',
  styleUrls: ['./goods.component.scss']
})
export class GoodsComponent implements OnInit {

  @Input() products: ProductView[];

  constructor() {
  }

  ngOnInit() {
  }

}
