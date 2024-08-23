import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-my-profile',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './my-profile.component.html',
  styleUrl: './my-profile.component.css'
})
export class MyProfileComponent implements OnInit {
  user: any;
  constructor(
    private userService: UserService 
  ) {};

  ngOnInit(): void {
    this.userService.myProfile().subscribe({
      next: (response) => {
        this.user = response.data;
        console.log(this.user);
      },
      error: (error) => {
        console.error(error);
      }
    });
  }

}
