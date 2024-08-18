import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { UserComponent } from './components/user/user.component';
import { TvDetailsComponent } from './components/tv-details/tv-details.component';
import { TvShowsComponent } from './components/tv-shows/tv-shows.component';

// decorator,
// function
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    NavbarComponent,
    FooterComponent,
    UserComponent,
    TvDetailsComponent,
    TvShowsComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'day4';
}
