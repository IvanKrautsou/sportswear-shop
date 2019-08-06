import {Component, OnInit} from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {Product} from '../../product';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.scss']
})
export class AdminPageComponent implements OnInit {

  constructor(private fb: FormBuilder) {
  }

  productForm = this.fb.group({
    name: [''],
    size: ['XS'],
    sex: [''],
    price: [''],
    description: [''],
  });

  selectOptions: string[] = ['XS', 'S', 'M', 'L', 'XL', 'XXL'];
  radioOptions: string[] = ['men', 'women', 'children'];

  product: Product;

  onSubmit() {
    this.product = this.productForm.value;
    this.product.id = Math.floor(Math.random() * 1000);

    console.log(this.product);
  }

  ngOnInit() {
  }

}
