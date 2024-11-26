import { Component, OnInit } from '@angular/core';
import { ShowService } from '../services/show.service';


@Component({
  selector: 'app-show-list',
  templateUrl: './show-list.component.html',
  styleUrls: ['./show-list.component.css']
})
export class ShowListComponent implements OnInit {
  shows: any[] = [];
  msgType: string = '';
  msg: string = '';
  
  constructor(private showService: ShowService) {}

  ngOnInit(): void {
    this.getShows();
  }

  getShows(): void {
    this.showService.getShows().subscribe({
      next: (data: any[]) => {
        this.shows = data;
        console.log("Show List : ", this.shows );
      },
      error: (err) => {
        this.msgType = 'error';
        this.msg = 'Error fetching movies.';
      },
      complete: () => {
        console.log('Show list fetched successfully.');
      }
    });
  }

  editShow(showId: number) {
    console.log("Id of the show to edit : ", showId);
  }

  deleteShow(showId: number) {
    console.log("Id of the show to delete : ", showId);
  }
}
