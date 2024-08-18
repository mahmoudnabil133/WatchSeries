import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { BehaviorSubject, Subscription } from 'rxjs';
import { RouterModule } from '@angular/router';
import { TvShowService } from '../../services/tv-show.service';

@Component({
  selector: 'app-tv-shows',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './tv-shows.component.html',
  styleUrls: ['./tv-shows.component.css']
})
export class TvShowsComponent implements OnInit, OnDestroy {
  allShows: any[] = [];
  subscription!: Subscription;
  currentPage!: BehaviorSubject<number>;
  page!: number;
  totalPages!: number;

  constructor(private showServ: TvShowService) {
    this.currentPage = new BehaviorSubject<number>(this.page);
  }

  ngOnInit() {
    this.currentPage.subscribe((newPage) => {
      this.subscription = this.showServ
        .getAllShows(newPage)
        .subscribe((response) => {
          this.allShows = response.data;
          this.page = response.page;
          this.totalPages = response.total_pages;
        });
    });
  }

  nextPage() {
    if (this.page < this.totalPages) {
      this.currentPage.next(++this.page);
    }
  }

  prevPage() {
    if (this.page > 1) {
      this.currentPage.next(--this.page);
    }
  }

  trackById(index: number, show: any): string {
    return show._id;
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
