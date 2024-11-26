import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  userRef = new FormGroup({
    email: new FormControl(),
    name: new FormControl(),
    password: new FormControl(),
    role: new FormControl()
  });
  msg: string = '';
  constructor(private userService: UserService, private router: Router) { //DI for UserService   
  }

  signIn(): void {
    let user = this.userRef.value;
    let email = this.userRef.value.email;

    let emailSplit = email.split('@');    

    this.userService.signIn(user).subscribe({
      next: (result:any) => {        

        if(result == "Admin login successful") {

          localStorage.setItem('userName', 'Admin');
          localStorage.setItem('userType', 'admin');
          this.router.navigate(['/admin/admin']);          

        } else if(result == "Customer login successful") {

          localStorage.setItem('userName', emailSplit[0]);
          localStorage.setItem('userType', 'customer');
          this.router.navigate(['/movie-listing']);
        } else {
          this.msg = result;
        }
      },
      error: (error: any) => {
        console.log("Error : ", error);
      },
      complete: () => {
        console.log("Login completed");
      }
    })
    console.log("New user data :", user);
    this.userRef.reset();
  }
}
