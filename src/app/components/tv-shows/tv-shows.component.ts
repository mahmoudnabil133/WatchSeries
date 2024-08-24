import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { BehaviorSubject, Subscription } from 'rxjs';
import { RouterModule } from '@angular/router';
import { TvShowService } from '../../services/tv-show.service';
import { FormsModule, NgModel } from '@angular/forms';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-tv-shows',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './tv-shows.component.html',
  styleUrls: ['./tv-shows.component.css']
})
export class TvShowsComponent implements OnInit, OnDestroy {
  allShows: any[] = [];
  subscription!: Subscription;
  currentPage!: BehaviorSubject<number>;
  page!: number;
  totalPages!: number;
  searchQuery: string=''
  genres: any[] = [];
  genres_ids: any[] = [];
  rate!: number;

  constructor(private showServ: TvShowService,
    private userServ: UserService
  ) {
    this.currentPage = new BehaviorSubject<number>(this.page);
  }

  ngOnInit() {
    this.loadShows();
    this.loadGenres()
  }
  loadShows() {
    const queryParams = {
      name: this.searchQuery,
      genre: this.genres_ids,
      showRate: this.rate
    }
    console.log(queryParams)
    this.currentPage.subscribe((newPage) => {
      this.subscription = this.showServ
        .getAllShows(newPage, queryParams)
        .subscribe((response) => {
          this.allShows = response.data;
          this.page = response.page;
          this.totalPages = response.total_pages;
        });
    });
  }
  searchShow(){
    this.loadShows();
  } 
  loadGenres(){
    this.showServ.getGenres().subscribe((response) => {
      this.genres = response.data;
    });
  }
  addGenre(genreId: string){
    if (this.genres_ids.includes(genreId)){
      this.genres_ids = this.genres_ids.filter((id) => id != genreId)
    } else{
      this.genres_ids.push(genreId)
    }
    this.loadShows()
  }
  addToWatchList(showId: string){
    this.userServ.addToWatchList(showId).subscribe({
      next: (response) => {
        if (response.success) {
          alert('series added to watch list');
        } else {
          alert(response.message); // Display server-side message
        }
      },
      error: (error) => {
        alert(error.message); // Display server-side error message
      }
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
