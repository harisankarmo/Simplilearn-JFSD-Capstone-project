import { Component, OnInit } from '@angular/core';
import { TheatreService } from '../services/theatre.service';

@Component({
  selector: 'app-theatre-list',
  templateUrl: './theatre-list.component.html',
  styleUrls: ['./theatre-list.component.css']
})
export class TheatreListComponent {

  theatres: any[] = []; // Holds theatre data

  constructor(private theatreService: TheatreService) {}

  ngOnInit(): void {
    this.fetchTheatres();
  }

  fetchTheatres(): void {
    this.theatreService.getTheatres().subscribe({
      next: (data) => {
        this.theatres = data; // Assign data to theatres array

        console.log("List of theatres : ", this.theatres);
      },
      error: (error) => {
        console.error('Error fetching theatres:', error);
      }
    });
  }

}
