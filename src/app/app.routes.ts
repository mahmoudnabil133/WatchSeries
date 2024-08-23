import { Routes } from '@angular/router';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { TvShowsComponent } from './components/tv-shows/tv-shows.component';
import { TvDetailsComponent } from './components/tv-details/tv-details.component';
import { SeasonDetailsComponent } from './components/season-details/season-details.component';
import { EpisodeDetailsComponent } from './components/episode-details/episode-details.component';
import { WatchListComponent } from './components/watch-list/watch-list.component';
import { LoginComponent } from './components/login/login.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { AuthGards } from './guards/auth.gards';
import { MyProfileComponent } from './components/my-profile/my-profile.component';
import { UserSettingComponent } from './components/user-setting/user-setting.component';

export const routes: Routes = [
  { path: '', redirectTo: 'shows', pathMatch: 'full' },
  { path: 'shows', component: TvShowsComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignUpComponent },
  { path: 'setting', component: UserSettingComponent, canActivate: [AuthGards] },
  { path: 'myProfile', component: MyProfileComponent, canActivate: [AuthGards] },
  { path: 'shows/:id', component: TvDetailsComponent, canActivate: [AuthGards] },
  {
    path: 'shows/:id/seasons/:seasonNumber',
    component: SeasonDetailsComponent,
  },
  {
    path: 'shows/:showId/seasons/:seasonId/episodes/:episodeNumber',
    component: EpisodeDetailsComponent,
  },
  { path: 'users/:userId/watchList', component: WatchListComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignUpComponent },
  { path: '**', component: PageNotFoundComponent },
];
