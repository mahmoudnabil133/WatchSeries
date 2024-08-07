import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MovieResponse } from '../model/movie-response';

@Injectable({
  providedIn: 'root'
})
export class TvShowService {
  apikey = '037f872ea1c47d9d478cde261bcb9c2e';
  constructor(private http: HttpClient,) {}

  getAllShows(pageNumber: number = 1): Observable<MovieResponse> {
    return this.http.get<MovieResponse>(
      `https://api.themoviedb.org/3/discover/tv?api_key=${this.apikey}&page=${pageNumber}`
    );
  }

  getShowById(tvShowId: number): Observable<any> {
    return this.http.get<any>(
      `https://api.themoviedb.org/3/tv/${tvShowId}?api_key=${this.apikey}`
    );
  }
}
