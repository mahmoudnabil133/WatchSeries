import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TvShowService } from '../../services/tv-show.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tv-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tv-details.component.html',
  styleUrl: './tv-details.component.css'
})
export class TvDetailsComponent implements OnInit {
  // movie!: IMovie;
  tvShow!: any;
  id!: number;

  constructor(
    private movieServ: TvShowService,
    private route: ActivatedRoute
  ) {}
  ngOnInit() {
    this.id = Number(this.route.snapshot.paramMap.get('id')!);
    this.movieServ.getShowById(this.id).subscribe((response) => {
      console.log(response);
      
      this.tvShow = response;
    });
  }
}
