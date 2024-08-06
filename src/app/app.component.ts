import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { UserComponent } from './components/user/user.component';
import { ProductsComponent } from './components/products/products.component';
import { MoviesComponent } from './components/movies/movies.component';
import { MovieDetailsComponent } from './components/movie-details/movie-details.component';
import { HomeComponent } from './components/home/home.component';

// decorator,
// function
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,NavbarComponent,FooterComponent,UserComponent,ProductsComponent,
    MoviesComponent,MovieDetailsComponent,HomeComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'day4';
}
