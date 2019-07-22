import {Component, OnInit, Input} from '@angular/core';
import {Product} from '../../../product';

@Component({
  selector: 'app-goods',
  templateUrl: './goods.component.html',
  styleUrls: ['./goods.component.scss']
})
export class GoodsComponent implements OnInit {

  @Input() products: Product[];

  constructor() {
  }

  ngOnInit() {
  }

}
