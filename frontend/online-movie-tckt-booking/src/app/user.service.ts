import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private baseUrl: string = 'http://localhost:9090/user';
  
  constructor(private http: HttpClient) {}

  //Calling signin endpoint.
  signIn(user:any): Observable<string> {
    return this.http.post(this.baseUrl + "/signin", user, {responseType:'text'});
  }

  //Calling signup endpoint.
  signUp(user: any): Observable<string> {
    return this.http.post(this.baseUrl + "/signup", user, {responseType:'text'});
  }
}
