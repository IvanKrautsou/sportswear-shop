import {Component, Input, OnInit} from '@angular/core';
import {Output, EventEmitter} from '@angular/core';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss']
})
export class CheckboxComponent implements OnInit {

  @Input() checked: Observable<boolean>;
  @Output() changeSexesList = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
  }

}
