import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { TvShowService } from '../../services/tv-show.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tv-details',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './tv-details.component.html',
  styleUrls: ['./tv-details.component.css']
})
export class TvDetailsComponent implements OnInit {
  tvShow: any;
  seasons: any[] = [];
  cast: any[] = [];
  currentSlideIndex = 0;
  maxVisibleCast = 5; // Maximum number of cast members visible at a time

  constructor(
    private tvShowService: TvShowService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    const id: string = this.route.snapshot.paramMap.get('id')!;
    
    // Fetch TV show details
    this.tvShowService.getShowById(id).subscribe({
      next: (response) => {
        this.tvShow = response.data;
        console.log('TV Show Details:', this.tvShow);
      },
      error: (err) => {
        console.error('Error fetching TV show details:', err);
      }
    });

    // Fetch seasons
    this.tvShowService.getSeasons(id).subscribe({
      next: (response) => {
        this.seasons = response.data;
        console.log('Seasons:', this.seasons);

        // Get the guest stars from the first episode of the first season
        if (this.seasons.length > 0 && this.seasons[0].episodes.length > 0) {
          this.cast = this.seasons[0].episodes[0].guest_stars;
          console.log('Guest Stars:', this.cast);
        } else {
          console.warn('No episodes or guest stars found for this TV show.');
        }
      },
      error: (err) => {
        console.error('Error fetching seasons:', err);
      }
    });
  }

}
