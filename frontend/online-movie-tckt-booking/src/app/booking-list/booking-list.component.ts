import { Component, OnInit } from '@angular/core';
import { BookingService } from '../services/booking.service';

@Component({
  selector: 'app-booking-list',
  templateUrl: './booking-list.component.html',
  styleUrls: ['./booking-list.component.css']
})
export class BookingListComponent implements OnInit {
  bookings: any[] = [];
  msgType: string = '';
  msg: string = '';
  
  constructor(private bookingService: BookingService) {}

  ngOnInit(): void {
    this.getBookings();
  }

  getBookings(): void {
    this.bookingService.getBookings().subscribe({
      next: (data: any[]) => {
        this.bookings = data;
        console.log("Booking List : ", this.bookings );
      },
      error: (err) => {
        this.msgType = 'error';
        this.msg = 'Error fetching bookings.';
      },
      complete: () => {
        console.log('Booking list fetched successfully.');
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
