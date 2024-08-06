import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import { IMovie } from '../movies/IMovie';

@Component({
  selector: 'app-movie-details',
  standalone: true,
  imports: [],
  templateUrl: './movie-details.component.html',
  styleUrl: './movie-details.component.css',
})
export class MovieDetailsComponent implements OnInit {
  // movie!: IMovie;
  movie!: any;
  id: number = 533535;

  constructor(private movieServ: MoviesService) {}
  ngOnInit() {
    this.movieServ.getMovieById(this.id).subscribe((response) => {
      console.log(response);
      this.movie = response;
    });
  }
}
