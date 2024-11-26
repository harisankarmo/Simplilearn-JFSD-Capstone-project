import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShowService {
  
  private apiUrl = 'http://localhost:9090/shows';

  constructor(private http: HttpClient) {}

  //Add new movie
  addShow(movie: any): Observable<string> {
    return this.http.post(this.apiUrl + '/add', movie, {responseType:'text'});
  }

  //get all movies
  getShows(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl + "/list"); // API to fetch shows list
  }
  
}
