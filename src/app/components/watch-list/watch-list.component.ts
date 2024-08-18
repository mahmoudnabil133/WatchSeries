import { CommonModule } from '@angular/common';
import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-watch-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './watch-list.component.html',
  styleUrl: './watch-list.component.css',
})
export class WatchListComponent implements OnInit {
  constructor(private userServ: UserService) {}
  watchList!: any[];
  user = {
    _id: '58468723542',
  };
  ngOnInit(): void {
    this.userServ.getUserWatchList(this.user._id).subscribe((list) => {
      this.watchList = list;
      console.log(list);
    });
  }

  trackById(index: number, show: any): string {
    return show._id;
  }
}
