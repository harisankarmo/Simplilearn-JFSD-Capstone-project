import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { Theatre } from '../models/theatre.model';

@Injectable({
  providedIn: 'root'
})
export class TheatreService {

  private apiUrl = 'http://localhost:9090/theatre'; // Replace with your actual API URL

  constructor(private http: HttpClient) {}

  //Add new theatre
  addTheatre(theatre: any): Observable<string> {
    return this.http.post(this.apiUrl + '/add', theatre, {responseType:'text'});
  }

  //get all theatres
  getTheatres(): Observable<Theatre[]> {
    return this.http.get<Theatre[]>(this.apiUrl + '/list'); // API to fetch theatres
  }


}
