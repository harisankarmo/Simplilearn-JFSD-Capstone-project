import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UserService } from '../user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  userRef = new FormGroup({
    email: new FormControl(),
    name: new FormControl(),
    password: new FormControl(),
    role: new FormControl()
  });
  msg: string = '';
  constructor(private userService: UserService) { //DI for UserService   
  }

  signUp(): void {
    let user = this.userRef.value;
    this.userService.signUp(user).subscribe({
      next: (result:any) => {
        this.msg = result;
      },
      error: (error: any) => {
        console.log("User SignUp Error : ", error);
      },
      complete: () => {
        console.log("SignUp completed");
      }
    })
    console.log("User SignIn data :", user);
    this.userRef.reset();
  }
}
