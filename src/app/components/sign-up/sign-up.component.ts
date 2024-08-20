import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormBuilder,
  Validators,
  ReactiveFormsModule,
  FormsModule,
  FormGroup,
} from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { passwordMatchValidator } from '../../shared/password-match.directive';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, RouterLink],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css',
})
export class SignUpComponent {
  registerForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private http: HttpClient
  ) {
    this.registerForm = this.fb.group(
      {
        fullName: [
          '',
          [
            Validators.required,
            Validators.pattern(/^[a-zA-Z]+(?: [a-zA-Z]+)*$/),
          ],
        ],
        email: ['', [Validators.required, Validators.email]],
        password: ['', Validators.required],
        confirmPassword: ['', Validators.required],
        checked: ['', Validators.required],
      },
      {
        validators: passwordMatchValidator,
      }
    );
  }

  get fullName() {
    return this.registerForm.controls['fullName'];
  }

  get email() {
    return this.registerForm.controls['email'];
  }

  get password() {
    return this.registerForm.controls['password'];
  }

  get confirmPassword() {
    return this.registerForm.controls['confirmPassword'];
  }

  get checked() {
    return this.registerForm.controls['checked'];
  }

  onSubmit() {
    console.log(':,pk,');

    if (this.registerForm.valid) {
      this.http
        .post(
          'http://localhost:3000/users/registerUser',
          this.registerForm.value
        )
        .subscribe(
          (response) => {
            console.log('User registered successfully', response);
            this.router.navigate(['/shows']);
          },
          (error) => {
            console.error('Error registering user', error);
          }
        );
      console.log('Form Submitted', this.registerForm.value);
    }
  }
}
