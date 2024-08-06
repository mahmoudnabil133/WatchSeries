import { DatePipe, UpperCasePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import { IMovie } from './IMovie';

@Component({
  selector: 'app-movies',
  standalone: true,
  imports: [DatePipe, UpperCasePipe],
  templateUrl: './movies.component.html',
  styleUrl: './movies.component.css',
})
export class MoviesComponent implements OnInit {
  allMovies: IMovie[] = [];
  constructor(private movieServ: MoviesService) {}
  // hook
  ngOnInit() {
    this.movieServ.getAllMovies().subscribe((response) => {
      // console.log(response.results);
      this.allMovies=response.results
    });
  }
}
