import { DatePipe, UpperCasePipe } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import { IMovie } from './IMovie';
import { BehaviorSubject, Subscription } from 'rxjs';
import { RouterModule } from '@angular/router';
import { P } from '@angular/cdk/keycodes';

@Component({
  selector: 'app-movies',
  standalone: true,
  imports: [DatePipe, UpperCasePipe, RouterModule],
  templateUrl: './movies.component.html',
  styleUrl: './movies.component.css',
})
export class MoviesComponent implements OnInit, OnDestroy {
  allMovies: IMovie[] = [];
  subscription!: Subscription;
  currentPage!: BehaviorSubject<number>;
  page!: number;
  totalPages!: number;
  constructor(private movieServ: MoviesService) {
    this.currentPage = new BehaviorSubject<number>(this.page);
  }
  // hook
  ngOnInit() {
    this.currentPage.subscribe((newPage) => {
      this.subscription = this.movieServ
        .getAllMovies(newPage)
        .subscribe((response) => {
          // console.log(response);
          this.allMovies = response.results
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
