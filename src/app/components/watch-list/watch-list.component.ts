import { CommonModule } from '@angular/common';
import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-watch-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './watch-list.component.html',
  styleUrl: './watch-list.component.css',
})
export class WatchListComponent implements OnInit {
  constructor(private userServ: UserService) {}
  watchList!: any[];
  errorMessage: string | null = null;
  user = {
    _id: '58468723542',
  };
  ngOnInit(): void {
    this.getWatchList();
  }
  getWatchList(): void {
    this.userServ.getWatchList().subscribe({
      next: (response) => {
        if (response.success) {
          this.watchList = response.data;
        } else {
          this.errorMessage = response.message; // Display server-side message
        }
      },
      error: (error) => {
        this.errorMessage = error.message; // Display server-side error message
      }
    });
  }
  removeFromWatchList(showId: string): void {
    this.userServ.removeFromWatchList(showId).subscribe({
      next: (response) => {
        if (response.success) {
          alert('series Removed from watch list');
          this.getWatchList();
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
