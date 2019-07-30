import {Component, Input, OnInit} from '@angular/core';
import {Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss']
})
export class CheckboxComponent implements OnInit {

  @Input() checked: boolean;
  @Output() valueChanged = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
  }

}
