import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import { IMovie } from '../movies/IMovie';
import { ActivatedRoute } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';

@Component({
  selector: 'app-movie-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './movie-details.component.html',
  styleUrl: './movie-details.component.css',
})
export class MovieDetailsComponent implements OnInit {
  // movie!: IMovie;
  movie!: any;
  id!: number;

  constructor(
    private movieServ: MoviesService,
    private route: ActivatedRoute
  ) {}
  ngOnInit() {
    this.id = Number(this.route.snapshot.paramMap.get('id')!);
    this.movieServ.getMovieById(this.id).subscribe((response) => {
      console.log(response);
      
      this.movie = response;
    });
  }
}
