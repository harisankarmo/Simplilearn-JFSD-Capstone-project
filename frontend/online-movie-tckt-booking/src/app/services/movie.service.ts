import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Movie } from '../models/movie.model';


@Injectable({
  providedIn: 'root'
})
export class MovieService {  

  private apiUrl = 'http://localhost:9090/movies'; // Replace with your actual API URL

  constructor(private http: HttpClient) {}

  //Add new movie
  addMovie(movie: any): Observable<string> {
    return this.http.post(this.apiUrl + '/add', movie, {responseType:'text'});
  }

  //get all movies
  getMovies(): Observable<Movie[]> {
    return this.http.get<Movie[]>(this.apiUrl + "/"); // API to fetch movies
  }

  
}
