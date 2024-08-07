import { CommonModule, DatePipe, UpperCasePipe } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import { BehaviorSubject, Subscription } from 'rxjs';
import { RouterModule } from '@angular/router';
import { P } from '@angular/cdk/keycodes';
import { ITvShow } from './ITvShow';
import { TvShowService } from '../../services/tv-show.service';

@Component({
  selector: 'app-tv-shows',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './tv-shows.component.html',
  styleUrl: './tv-shows.component.css'
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
  // hook
  ngOnInit() {
    this.currentPage.subscribe((newPage) => {
      this.subscription = this.showServ
        .getAllShows(newPage)
        .subscribe((response) => {
          // console.log(response);
          this.allShows = response.results
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

  ngOnDestroy() {
    //navigate
    // cleanup
    console.log('Movies Component destroyed');
    this.subscription.unsubscribe();
  }
}
