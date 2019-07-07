import { TestBed } from '@angular/core/testing';

import { ProductsFilterService } from './products-filter.service';

describe('ProductsFilterService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProductsFilterService = TestBed.get(ProductsFilterService);
    expect(service).toBeTruthy();
  });
});
