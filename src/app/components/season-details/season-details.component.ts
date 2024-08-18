import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { TvShowService } from '../../services/tv-show.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-season-details',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './season-details.component.html',
  styleUrls: ['./season-details.component.css']
})
export class SeasonDetailsComponent implements OnInit{
  season: any;
  episodes: any[] = [];
  constructor(
    private tvShowService: TvShowService,
    private route: ActivatedRoute
  ) {}
  ngOnInit(): void {
    const showId: string = this.route.snapshot.paramMap.get('id')!;
    const seasonNumber: number = parseInt(this.route.snapshot.paramMap.get('seasonNumber')!);
    this.tvShowService.getSeasonsBySeasonNumber(showId, seasonNumber).subscribe((response)=>{
      this.season = response.data;
      this.episodes = this.season.episodes;
    })
  }
}
