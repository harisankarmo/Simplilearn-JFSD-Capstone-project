import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  private apiUrl = 'http://localhost:9090/bookings';

  constructor(private http: HttpClient){}

  //Add new booking
  addBooking(booking: any): Observable<string> {
    return this.http.post(this.apiUrl + '/add', booking, {responseType:'text'});
  }

  //get all bookings
  getBookings(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl + "/list"); // API to fetch bookings list
  }

}
