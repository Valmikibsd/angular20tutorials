import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductCategoryMaster } from './product-category-master';

describe('ProductCategoryMaster', () => {
  let component: ProductCategoryMaster;
  let fixture: ComponentFixture<ProductCategoryMaster>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductCategoryMaster]
    }).compileComponents();

    fixture = TestBed.createComponent(ProductCategoryMaster);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
