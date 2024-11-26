import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ShowService } from '../services/show.service';

import { TheatreService } from '../services/theatre.service'; 
import { MovieService } from '../services/movie.service'; 

import { Theatre } from '../models/theatre.model';
import { Movie } from '../models/movie.model'; 

@Component({
  selector: 'app-show-create',
  templateUrl: './show-create.component.html',
  styleUrls: ['./show-create.component.css']
})
export class ShowCreateComponent implements OnInit {
  theatres: Theatre[] = []; // Holds theatre data
  movies: Movie[] = []; // Holds movie data

  ngOnInit(): void {
    this.getMovies();
    this.fetchTheatres();
  }

  showForm: FormGroup;
  isSubmitted = false;

  msgType = 'error';
  msg = '';


  getMovies(): void {
    this.movieService.getMovies().subscribe({
      next: (data: Movie[]) => {
        this.movies = data;
        console.log("Movie List : ", this.movies );
      },
      error: (err) => {
        this.msgType = 'error';
        this.msg = 'Error fetching movies.';
      },
      complete: () => {
        console.log('Movie list fetched successfully.');
      }
    });
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

  constructor(private fb: FormBuilder, private movieService: MovieService, private theatreService: TheatreService, private showService: ShowService) {
    this.showForm = this.fb.group({
      theatre: this.fb.group({
        theatreId: [null, [Validators.required]],
      }),
      movie: this.fb.group({
        movieId: [null, [Validators.required]],
      }),
      showDate: [null, [Validators.required]],
      startTime: [null, [Validators.required]],
      endTime: [null, [Validators.required]],
      ticketPrice: [null, [Validators.required, Validators.min(0)]],
    });
  }

  get f() {
    return this.showForm.controls;
  }

  onSubmit() {
    this.isSubmitted = true;

    if (this.showForm.invalid) {
      return;
    }

    let show = this.showForm.value;

    console.log("Show Details : ", show);

    this.showService.addShow(show).subscribe(
      {
        next: (result:string) => {
          this.msg = result; 
          if(result == "Show saved successfully") {
            this.msgType = 'success';
          } else {
            this.msgType = 'error';
          }
          
          // Reset the form and validation state after a successful submission
          this.showForm.reset();
          this.isSubmitted = false; // Reset submission state
        },
        error: (error: any) => {
          console.log("Adding show Error : ", error);
        },
        complete: () => {
          console.log("Show added successfully");
        }
      }
    );

    this.showForm.reset();
  }
}
