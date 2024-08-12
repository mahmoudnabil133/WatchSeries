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

  getAllShows(pageNumber: number = 1): Observable<any> {
    return this.http.get<MovieResponse>(
      `http://localhost:3000/shows?page=${pageNumber}`
    );
  }

  getShowById(tvShowId: string): Observable<any> {
    return this.http.get<any>(
      `http://localhost:3000/shows/${tvShowId}`
    );
  }
}
