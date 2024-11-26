import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

import { CustomerdashboardComponent } from './customerdashboard/customerdashboard.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AdminModule } from './admin/admin.module';
import { AdmindashboardHomeComponent } from './admindashboard-home/admindashboard-home.component';
import { FrontMovieListingComponent } from './front-movie-listing/front-movie-listing.component';





@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,    
    CustomerdashboardComponent, AdmindashboardHomeComponent, FrontMovieListingComponent, 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AdminModule,
    HttpClientModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
