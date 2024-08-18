import { Routes } from '@angular/router';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { TvShowsComponent } from './components/tv-shows/tv-shows.component';
import { TvDetailsComponent } from './components/tv-details/tv-details.component';
import { SeasonDetailsComponent } from './components/season-details/season-details.component';
import { EpisodeDetailsComponent } from './components/episode-details/episode-details.component';
import { WatchListComponent } from './components/watch-list/watch-list.component';

export const routes: Routes = [
  { path: '', redirectTo: 'shows', pathMatch: 'full' },
  { path: 'shows', component: TvShowsComponent },
  { path: 'shows/:id', component: TvDetailsComponent },
  {
    path: 'shows/:id/seasons/:seasonNumber',
    component: SeasonDetailsComponent,
  },
  {
    path: 'shows/:showId/seasons/:seasonId/episodes/:episodeNumber',
    component: EpisodeDetailsComponent,
  },
  { path: 'users/:userId/watchList', component: WatchListComponent },
  { path: '**', component: PageNotFoundComponent },
];
