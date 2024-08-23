import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-setting',
  standalone: true,
  imports: [CommonModule, RouterLink, ReactiveFormsModule],
  templateUrl: './user-setting.component.html',
  styleUrls: ['./user-setting.component.css']
})
export class UserSettingComponent implements OnInit {
  user = { userName: '', email: '' };
  updateUserForm: FormGroup;
  passwordForm: FormGroup;
  isUpdateFormVisible: 'user' | 'password' | null = null;

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private router: Router
  ) {
    this.updateUserForm = this.fb.group({
      userName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]]
    });

    this.passwordForm = this.fb.group({
      passwordCurrent: ['', Validators.required],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required]
    }, { validators: this.passwordMatchValidator });
  }

  ngOnInit(): void {
    // Load user data on initialization
    this.loadUserData();
  }

  loadUserData(): void {
    this.userService.myProfile().subscribe({
      next: (response) => {
        this.user = response.data;
        this.updateUserForm.patchValue(this.user);
      },
      error: (error) => {
        console.error(error);
      }
    });
  }

  showUpdateForm(formType: 'user' | 'password'): void {
    this.isUpdateFormVisible = formType;
  }

  updateUserProfile(): void {
    if (this.updateUserForm.valid) {
      this.userService.updateProfile(this.updateUserForm.value).subscribe({
        next: () => {
          alert('User profile updated successfully');
          this.isUpdateFormVisible = null;
          this.loadUserData();
        },
        error: (error) => {
          alert(error.message);
        }
      });
    }
  }

  updateUserPassword(): void {
    if (this.passwordForm.valid) {
      this.userService.updatePassword(this.passwordForm.value).subscribe({
        next: () => {
          alert('Password updated successfully');
          this.isUpdateFormVisible = null;
        },
        error: (error) => {
          alert(error.message);
        }
      });
    }
  }

  deleteAccount(): void {
    if (confirm('Are you sure you want to delete your account?')) {
      this.userService.deleteProfile().subscribe({
        next: () => {
          alert('Account deleted successfully');
          this.router.navigate(['/login']);
        },
        error: (error) => {
          alert(error.message);
        }
      });
    }
  }

  private passwordMatchValidator(formGroup: FormGroup): { [key: string]: boolean } | null {
    const password = formGroup.get('password')?.value;
    const confirmPassword = formGroup.get('confirmPassword')?.value;
    return password === confirmPassword ? null : { mismatch: true };
  }
}
