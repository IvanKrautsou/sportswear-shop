import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-goods',
  templateUrl: './goods.component.html',
  styleUrls: ['./goods.component.scss']
})
export class GoodsComponent implements OnInit {

  @Input() products;

  constructor() { }

  ngOnInit() {
  }

}
