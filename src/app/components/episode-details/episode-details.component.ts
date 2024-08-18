import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { TvShowService } from '../../services/tv-show.service';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-episode-details',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './episode-details.component.html',
  styleUrl: './episode-details.component.css'
})
export class EpisodeDetailsComponent implements OnInit{
  episode: any;
  constructor(
    private tvShowService: TvShowService,
    private route: ActivatedRoute
  ) {}
  ngOnInit(): void {
    const showId: string = this.route.snapshot.paramMap.get('showId')!;
    const seasonId: string = this.route.snapshot.paramMap.get('seasonId')!;
    const episodeNumber: number = parseInt(this.route.snapshot.paramMap.get('episodeNumber')!);
    this.tvShowService.getOneEpisodesForSeason(showId, seasonId, episodeNumber).subscribe((response)=>{
      this.episode = response.data;
    })
  }

}
