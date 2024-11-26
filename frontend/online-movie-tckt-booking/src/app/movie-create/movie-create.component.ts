import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { MovieService } from '../services/movie.service';

@Component({
  selector: 'app-movie-create',
  templateUrl: './movie-create.component.html',
  styleUrls: ['./movie-create.component.css']
})
export class MovieCreateComponent {
  movieForm: FormGroup;
  isSubmitted = false;

  msgType = 'error';
  msg = '';

  constructor(private fb: FormBuilder, private movieService: MovieService) {
    this.movieForm = this.fb.group({      
      genre: ['', [Validators.required, Validators.minLength(2)]],
      language: ['', [Validators.required, Validators.minLength(2)]],
      movieImage: [''],  // for image URL Optional
      releaseDate: ['', [Validators.required]],
      title: ['', [Validators.required, Validators.minLength(2)]],
      description: ['', [Validators.required, Validators.minLength(10)]],
      starer: ['', [Validators.required, Validators.minLength(3)]]
    });
  }

  get f() {
    return this.movieForm.controls;
  }

  onSubmit() {
    this.isSubmitted = true;

    if (this.movieForm.invalid) {
      return;
    }

    let movie = this.movieForm.value;

    console.log("Movie details : ", movie);    

    this.movieService.addMovie(movie).subscribe(
      {
        next: (result:string) => {
          this.msg = result; 
          if(result == "Movie saved successfully") {
            this.msgType = 'success';
          } else {
            this.msgType = 'error';
          }
          
          // Reset the form and validation state after a successful submission
          this.movieForm.reset();
          this.isSubmitted = false; // Reset submission state
        },
        error: (error: any) => {
          console.log("Adding movie Error : ", error);
        },
        complete: () => {
          console.log("Movie added successfully");
        }
      }
    );

    this.movieForm.reset();
  }
}
