import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import { CookieService } from 'ngx-cookie-service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule]
})
export class SignUpComponent implements OnInit {
  signUpForm!: FormGroup;
  errorMessage: string | null = null;

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private cookieService: CookieService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.signUpForm = this.fb.group({
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required]
    }, { validator: this.passwordMatchValidator });
  }

  passwordMatchValidator(form: FormGroup): { [key: string]: boolean } | null {
    const password = form.get('password')?.value;
    const confirmPassword = form.get('confirmPassword')?.value;
    return password === confirmPassword ? null : { mismatch: true };
  }

  signupUser(): void {
    if (this.signUpForm.invalid) {
      this.errorMessage = "Please correct the errors in the form.";
      return;
    }

    const user = {
      userName: this.signUpForm.get('username')?.value,
      email: this.signUpForm.get('email')?.value,
      password: this.signUpForm.get('password')?.value,
      confirmPassword: this.signUpForm.get('confirmPassword')?.value
    };

    this.userService.signUp(user).subscribe({
      next: (response) => {
        if (response.success) {
          this.userService.setCookie(response.token); // Save the JWT in a cookie
          this.router.navigate(['/shows']); // Navigate to home page after successful login
        } else {
          this.errorMessage = response.message; // Display server-side message
        }
      },
      error: (error) => {
        this.errorMessage = error.message; // Display server-side error message
      }
    });
  }
}
