import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductInfoPageComponent } from './product-info-page.component';

describe('ProductInfoPageComponent', () => {
  let component: ProductInfoPageComponent;
  let fixture: ComponentFixture<ProductInfoPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductInfoPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductInfoPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
