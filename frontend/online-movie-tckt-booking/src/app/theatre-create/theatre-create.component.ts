import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TheatreService } from '../services/theatre.service';

@Component({
  selector: 'app-theatre-create',
  templateUrl: './theatre-create.component.html',
  styleUrls: ['./theatre-create.component.css']
})
export class TheatreCreateComponent {

  theatreForm: FormGroup;
  isSubmitted = false;

  msgType = 'error';
  msg = '';

  constructor(private fb: FormBuilder, private theatreService: TheatreService) {
    this.theatreForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      capacity: [0, [Validators.required, Validators.min(1)]],
      location: ['', [Validators.required]]
    });
  }

  get f() {
    return this.theatreForm.controls;
  }

  onSubmit() {
    this.isSubmitted = true;

    if (this.theatreForm.invalid) {
      return;
    }

    let thatre = this.theatreForm.value;

    console.log("Theatre : ", thatre);

    this.theatreService.addTheatre(thatre).subscribe(
      {
        next: (result:string) => {
          this.msg = result; 
          if(result == "Theatre saved successfully") {
            this.msgType = 'success';
          } else {
            this.msgType = 'error';
          }
          
          // Reset the form and validation state after a successful submission
          this.theatreForm.reset();
          this.isSubmitted = false; // Reset submission state
        },
        error: (error: any) => {
          console.log("Adding theatre Error : ", error);
        },
        complete: () => {
          console.log("Theatre added successfully");
        }
      }
    );

    this.theatreForm.reset();
  }

}
