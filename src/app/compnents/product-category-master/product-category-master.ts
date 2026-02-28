import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

interface ProductCategory {
  categoryId: number;
  categoryCode: string;
  categoryName: string;
  displayOrder: number;
  description: string;
  isActive: boolean;
}

@Component({
  selector: 'app-product-category-master',
  imports: [ReactiveFormsModule],
  templateUrl: './product-category-master.html',
  styleUrl: './product-category-master.css'
})
export class ProductCategoryMaster {
  private readonly fb = inject(FormBuilder);

  submitted = false;
  private currentId = 3;

  categoryList: ProductCategory[] = [
    {
      categoryId: 1,
      categoryCode: 'ELEC',
      categoryName: 'Electronics',
      displayOrder: 1,
      description: 'Gadgets, accessories and electronic devices.',
      isActive: true
    },
    {
      categoryId: 2,
      categoryCode: 'HOME',
      categoryName: 'Home Essentials',
      displayOrder: 2,
      description: 'Products used for everyday home needs.',
      isActive: true
    }
  ];

  readonly categoryForm = this.fb.group({
    categoryId: [0],
    categoryCode: [
      '',
      [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(10),
        Validators.pattern(/^[A-Z0-9_-]+$/)
      ]
    ],
    categoryName: [
      '',
      [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(60),
        Validators.pattern(/^[A-Za-z0-9][A-Za-z0-9 &()/-]*$/)
      ]
    ],
    displayOrder: [1, [Validators.required, Validators.min(1), Validators.max(999)]],
    description: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(250)]],
    isActive: [true, [Validators.required]]
  });

  get f() {
    return this.categoryForm.controls;
  }

  saveCategory(): void {
    this.submitted = true;

    if (this.categoryForm.invalid) {
      this.categoryForm.markAllAsTouched();
      return;
    }

    const payload = this.getPayload();

    if (payload.categoryId) {
      this.categoryList = this.categoryList.map((category) =>
        category.categoryId === payload.categoryId ? payload : category
      );
      alert('Category updated successfully');
    } else {
      this.currentId += 1;
      payload.categoryId = this.currentId;
      this.categoryList = [...this.categoryList, payload];
      alert('Category created successfully');
    }

    this.resetForm();
  }

  editCategory(category: ProductCategory): void {
    this.categoryForm.patchValue({ ...category });
    this.submitted = false;
    this.categoryForm.markAsUntouched();
  }

  deleteCategory(categoryId: number): void {
    this.categoryList = this.categoryList.filter((category) => category.categoryId !== categoryId);
    alert('Category deleted successfully');

    if (this.f.categoryId.value === categoryId) {
      this.resetForm();
    }
  }

  resetForm(): void {
    this.categoryForm.reset({
      categoryId: 0,
      categoryCode: '',
      categoryName: '',
      displayOrder: 1,
      description: '',
      isActive: true
    });

    this.submitted = false;
  }

  private getPayload(): ProductCategory {
    const value = this.categoryForm.getRawValue();

    return {
      categoryId: value.categoryId ?? 0,
      categoryCode: (value.categoryCode ?? '').trim().toUpperCase(),
      categoryName: (value.categoryName ?? '').trim(),
      displayOrder: Number(value.displayOrder ?? 1),
      description: (value.description ?? '').trim(),
      isActive: Boolean(value.isActive)
    };
  }
}
