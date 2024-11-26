import { Component, OnInit } from '@angular/core';
import { Movie } from '../models/movie.model';
import { MovieService } from '../services/movie.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
  movies: Movie[] = [];
  msgType: string = '';
  msg: string = '';

  constructor(private movieService: MovieService) {}

  ngOnInit(): void {
    this.getMovies();
  }

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

  editMovie(movieId: number) {
    console.log("Id of the movie to edit : ", movieId);
  }

  deleteMovie(movieId: number) {
    console.log("Id of the movie to delete : ", movieId);
  }
}
