import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  ReactiveFormsModule,
  ValidationErrors,
  Validators
} from '@angular/forms';

@Component({
  selector: 'app-user',
  imports: [ReactiveFormsModule],
  templateUrl: './user.html',
  styleUrl: './user.css'
})
export class User {
  private readonly http = inject(HttpClient);
  private readonly fb = inject(FormBuilder);

  userlist: any[] = [];
  submitted = false;

  readonly registrationForm = this.fb.group(
    {
      userId: [0],
      fullName: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
      emailId: ['', [Validators.required, Validators.email]],
      mobileNo: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]],
      password: [
        '',
        [
          Validators.required,
          Validators.minLength(8),
          Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>]).*$/)
        ]
      ],
      confirmPassword: ['', [Validators.required]],
      acceptTerms: [false, [Validators.requiredTrue]]
    },
    { validators: this.passwordMatchValidator }
  );

  ngOnInit(): void {
    this.getusers();
  }

  get f() {
    return this.registrationForm.controls;
  }

  register(): void {
    this.submitted = true;

    if (this.registrationForm.invalid) {
      this.registrationForm.markAllAsTouched();
      return;
    }

    const payload = this.getPayload();

    this.http.post('https://api.freeprojectapi.com/api/GoalTracker/register', payload).subscribe({
      next: () => {
        alert('Registered Successfully');
        this.getusers();
        this.clear();
      },
      error: (err: any) => {
        console.log(err);
        alert('Something went wrong');
      }
    });
  }

  update(): void {
    this.submitted = true;

    if (this.registrationForm.invalid) {
      this.registrationForm.markAllAsTouched();
      return;
    }

    const payload = this.getPayload();

    this.http.put('https://api.freeprojectapi.com/api/GoalTracker/register', payload).subscribe({
      next: () => {
        alert('Updated Successfully');
        this.getusers();
      },
      error: (err: any) => {
        console.log(err);
        alert('Something went wrong');
      }
    });
  }

  getusers(): void {
    this.http.get('https://api.freeprojectapi.com/api/GoalTracker/getAllUsers').subscribe((res: any) => {
      this.userlist = res;
    });
  }

  deleteuser(userId: number): void {
    this.http.delete(`https://api.freeprojectapi.com/api/GoalTracker/deleteUserById?id=${userId}`).subscribe({
      next: () => {
        alert('Deleted Successfully');
        this.getusers();
      },
      error: (err: any) => {
        console.log(err);
        alert('Something went wrong');
      }
    });
  }

  edituser(user: any): void {
    this.registrationForm.patchValue({
      userId: user.userId,
      fullName: user.fullName,
      emailId: user.emailId,
      mobileNo: user.mobileNo,
      password: user.password,
      confirmPassword: user.password,
      acceptTerms: true
    });

    this.submitted = false;
    this.registrationForm.markAsUntouched();
  }

  clear(): void {
    this.registrationForm.reset({
      userId: 0,
      fullName: '',
      emailId: '',
      mobileNo: '',
      password: '',
      confirmPassword: '',
      acceptTerms: false
    });

    this.submitted = false;
  }

  private getPayload() {
    const value = this.registrationForm.getRawValue();

    return {
      userId: value.userId ?? 0,
      emailId: value.emailId ?? '',
      password: value.password ?? '',
      fullName: value.fullName ?? '',
      mobileNo: value.mobileNo ?? ''
    };
  }

  private passwordMatchValidator(control: AbstractControl): ValidationErrors | null {
    const password = control.get('password')?.value;
    const confirmPassword = control.get('confirmPassword')?.value;

    if (!password || !confirmPassword) {
      return null;
    }

    return password === confirmPassword ? null : { passwordMismatch: true };
  }
}
