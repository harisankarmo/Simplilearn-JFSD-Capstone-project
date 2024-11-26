import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdmindashboardComponent } from '../admindashboard/admindashboard.component';

import { TheatreListComponent } from '../theatre-list/theatre-list.component';
import { TheatreCreateComponent } from '../theatre-create/theatre-create.component';
import { TheatreDetailComponent } from '../theatre-detail/theatre-detail.component';

import { MovieListComponent } from '../movie-list/movie-list.component';
import { MovieCreateComponent } from '../movie-create/movie-create.component';
import { MovieDetailComponent } from '../movie-detail/movie-detail.component';

import { ShowListComponent } from '../show-list/show-list.component';
import { ShowCreateComponent } from '../show-create/show-create.component';
import { ShowDetailComponent } from '../show-detail/show-detail.component';

import { BookingListComponent } from '../booking-list/booking-list.component'; 

import { AdmindashboardHomeComponent } from '../admindashboard-home/admindashboard-home.component';

const routes: Routes = [{
  path: 'admin',
  component: AdmindashboardComponent, 
  children : [
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' }, // Default route for /admin
    { path: 'dashboard', component: AdmindashboardHomeComponent} ,  
    { path: 'theatres', component: TheatreListComponent }, // Theatre list
    { path: 'theatres/create', component: TheatreCreateComponent }, // Create theatre
    { path: 'theatres/:id', component: TheatreDetailComponent }, // View/edit theatre

    { path: 'movies', component: MovieListComponent }, // Movie list
    { path: 'movies/create', component: MovieCreateComponent }, // Create movie
    { path: 'movies/:id', component: MovieDetailComponent }, // View/edit movie

    { path: 'shows', component: ShowListComponent }, // Show list
    { path: 'shows/create', component: ShowCreateComponent }, // Create show
    { path: 'shows/:id', component: ShowDetailComponent }, // View/edit show

    { path: 'bookings', component: BookingListComponent }, // Booking list

    
  ],

}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
