import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ShowService } from '../services/show.service';
import { TheatreService } from '../services/theatre.service';

import { Movie } from '../models/movie.model';
import { Theatre } from '../models/theatre.model';
import { MovieService } from '../services/movie.service';
import { BookingService } from '../services/booking.service';

declare var bootstrap: any;

@Component({
  selector: 'app-front-movie-listing',
  templateUrl: './front-movie-listing.component.html',
  styleUrls: ['./front-movie-listing.component.css']
})
export class FrontMovieListingComponent {

  filterForm: FormGroup;
  bookingForm : FormGroup;  
  //locations: string[] = ['New York', 'Los Angeles', 'Chicago', 'Houston', 'Miami'];  
  //movies: string[] = ['Inception', 'Avatar', 'Titanic', 'The Dark Knight', 'Interstellar'];
  shows: any[] = [];
  msg: string = '';
  msgType: string = '';
  filteredShows : any[] = [];
  theatres: any[] = [];
  movies: any[] = [];

  selectedShow: any;

  bookingReqData: any;


  getShows() : void {

    this.showService.getShows().subscribe( {
      next: (data: any[]) => {
        this.shows = data;
        console.log("Show List : ", this.shows );
        this.filteredShows = this.shows;
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

  //filteredShows = this.shows;

  constructor(private fb: FormBuilder, private showService : ShowService, private theatreService: TheatreService, private movieService: MovieService, private bookingService: BookingService) {
    
    this.getShows();
    this.getTheatres();
    this.getMovies();


    this.filterForm = this.fb.group({
      location: [''],
      movie: ['']
    });


    this.bookingForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]],
      tickets: ['', [Validators.required, Validators.min(1)]],
      showId: ['', Validators.required], // Add showId here
    });
  }

  ngOnInit(): void {}

  filterShows(): void {
    const { location, movie } = this.filterForm.value;
    this.filteredShows = this.shows.filter(show => {
      const matchesLocation = location ? parseInt(show.theatre.theatreId) === parseInt(location) : true;
      const matchesMovie = movie ? parseInt(show.movie.movieId) === parseInt(movie) : true;      

      return matchesLocation && matchesMovie;
      
    });
  }

  getTheatres(): void{
    this.theatreService.getTheatres().subscribe( {
      next: (data: Theatre[]) => {
        this.theatres = data;
        console.log("Theatre List : ", this.theatres );        
      },
      error: (err) => {
        this.msgType = 'error';
        this.msg = 'Error fetching theatres.';
      },
      complete: () => {
        console.log('Theatre list fetched successfully.');
      }
    });
  }

  getMovies(): void{
    this.movieService.getMovies().subscribe( {
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

  openBookingModal(show: any) {
    this.selectedShow = show;
    this.bookingForm.reset(); // Clear previous data
    // Set the showId in the bookingForm
    this.bookingForm.patchValue({ showId: show.showId });

    const bookingModal = new bootstrap.Modal(document.getElementById('bookingModal')!);
    bookingModal.show();
  }

  submitBooking() {
    if (this.bookingForm.valid) {
      const bookingData = this.bookingForm.value;
      console.log('Booking tickets:', bookingData, 'for show:', this.selectedShow);

      let totalPrice = parseFloat(this.selectedShow.ticketPrice) * parseInt(bookingData.tickets);
      
      
      // Add logic to handle booking submission
      this.bookingReqData = {
          userId: null,
          customerEmail: bookingData.email,
          customerName: bookingData.name,
          customerPhoneNumber : bookingData.phone,
          show : {
              showId: bookingData.showId
          },
          noOfTickets: bookingData.tickets,
          totalPrice : totalPrice,
          bookingDate : this.getCurrentDate(),
          status : "confirmed"      
      };


      this.bookingService.addBooking(this.bookingReqData).subscribe(
        {
          next: (result:string) => {
            this.msg = result; 
            if(result == "Booking data saved successfully") {
              this.msgType = 'success';
            } else {
              this.msgType = 'error';
            }
            
            // Reset the form and validation state after a successful submission
            this.bookingForm.reset();

            const bookingModal = bootstrap.Modal.getInstance(document.getElementById('bookingModal')!);
            bookingModal?.hide();

            this.bookShow(this.selectedShow);
            
          },
          error: (error: any) => {
            console.log("Adding theatre Error : ", error);
          },
          complete: () => {
            console.log("Theatre added successfully");
          }
        }
      );

      



      
    }
  }

  getCurrentDate(): string {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0'); // Months are 0-based
    const day = String(today.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  }

  bookShow(show: any): void {
    alert(`You booking is confirmed for "${show.movie.title}" at ${show.startTime} in ${show.theatre.location}`);
  }
}
