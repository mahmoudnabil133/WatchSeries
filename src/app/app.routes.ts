import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { MoviesComponent } from './components/movies/movies.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { ContactusComponent } from './components/contactus/contactus.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { MovieDetailsComponent } from './components/movie-details/movie-details.component';
import { TvShowsComponent } from './components/tv-shows/tv-shows.component';
import { TvDetailsComponent } from './components/tv-details/tv-details.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'movies', component: MoviesComponent },
  { path: 'details/:id', component: MovieDetailsComponent },
  { path: 'shows', component: TvShowsComponent },
  { path: 'shows/:id', component: TvDetailsComponent },
  { path: 'about', component: AboutusComponent },
  { path: 'contact', component: ContactusComponent },
  { path: '**', component: PageNotFoundComponent },
  
];
