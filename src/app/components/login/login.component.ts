import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import { CookieService } from 'ngx-cookie-service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  errorMessage: string | null = null;

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private cookieService: CookieService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
  }

  loginUser(): void {
    if (this.loginForm.invalid) {
      this.errorMessage = "Please correct the errors in the form.";
      return;
    }

    const user = {
      email: this.loginForm.get('email')?.value,
      password: this.loginForm.get('password')?.value,
    };

    this.userService.login(user).subscribe({
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
