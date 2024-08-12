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

  constructor(
    private movieServ: TvShowService,
    private route: ActivatedRoute
  ) {}
  ngOnInit() {
    const id: string = (this.route.snapshot.paramMap.get('id')!);
    console.log(id);
    this.movieServ.getShowById(id).subscribe((response) => {
      console.log(response);
      
      this.tvShow = response.data;
    });
  }
}
