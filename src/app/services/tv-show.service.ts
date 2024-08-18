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
  getSeasons(tvShowId: string): Observable<any> {
    return this.http.get<any>(
      `http://localhost:3000/shows/${tvShowId}/seasons`
    );
  }
  getSeasonsBySeasonNumber(tvShowId: string, seasonNumber: number): Observable<any> {
    return this.http.get<any>(
      `http://localhost:3000/shows/${tvShowId}/seasons/${seasonNumber}`
    );
  }
  getEpisodesForSeason(tvShowId: string, seasonId: string): Observable<any> {
    return this.http.get<any>(
      `http://localhost:3000/shows/${tvShowId}/seasons/${seasonId}/episodes`
    );
  }
  getOneEpisodesForSeason(tvShowId: string, seasonId: string, episodeNumber: number): Observable<any> {
    return this.http.get<any>(
      `http://localhost:3000/shows/${tvShowId}/seasons/${seasonId}/episodes/${episodeNumber}`
    );
  }
}
