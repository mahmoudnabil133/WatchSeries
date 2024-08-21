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
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, RouterLink],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css',
})
export class SignUpComponent {
  username: string = '';
  Email: string = '';
  Password: string = '';
  errorMessage: string = '';

  constructor(
    private authService: AuthService,
    private router: Router,
    private fb: FormBuilder
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

  onSignup(): void {
    this.authService.signup(this.username, this.Email, this.Password).subscribe(
      (response) => {
        console.log('User registered successfully', response);
        this.router.navigate(['/login']);
      },
      (error) => {
        console.error('Error occurred during signup', error);
        this.errorMessage = error.error.message || 'Failed to register';
      }
    );
  }

  registerForm: FormGroup;

  // constructor(
  //   private fb: FormBuilder,
  //   private router: Router,
  //   private http: HttpClient
  // ) {}

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

  // onSubmit() {
  //   console.log(':,pk,');

  //   if (this.registerForm.valid) {
  //     this.http
  //       .post(
  //         'http://localhost:3000/users/registerUser',
  //         this.registerForm.value
  //       )
  //       .subscribe(
  //         (response) => {
  //           console.log('User registered successfully', response);
  //           this.router.navigate(['/shows']);
  //         },
  //         (error) => {
  //           console.error('Error registering user', error);
  //         }
  //       );
  //     console.log('Form Submitted', this.registerForm.value);
  //   }
  // }
}
