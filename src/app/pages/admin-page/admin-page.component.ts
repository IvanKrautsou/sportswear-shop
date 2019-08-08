import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
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
    name: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(15)]],
    size: ['XS'],
    sex: [''],
    price: ['', [Validators.required, Validators.min(1)]],
    description: [''],
  });

  get name() { return this.productForm.get('name'); }
  get price() { return this.productForm.get('price'); }


  sizes: string[] = ['XS', 'S', 'M', 'L', 'XL', 'XXL'];

  sexesList: string[] = ['men', 'women', 'children'];

  product: Product;

  onSubmit() {
    this.product = this.productForm.value;
    this.product.id = Math.floor(Math.random() * 1000);

    console.log(this.product);
  }

  ngOnInit() {
  }

}
