import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { TheatreListComponent } from '../theatre-list/theatre-list.component';
import { TheatreCreateComponent } from '../theatre-create/theatre-create.component';
import { TheatreDetailComponent } from '../theatre-detail/theatre-detail.component';
import { MovieListComponent } from '../movie-list/movie-list.component';
import { MovieCreateComponent } from '../movie-create/movie-create.component';
import { MovieDetailComponent } from '../movie-detail/movie-detail.component';
import { ShowListComponent } from '../show-list/show-list.component';
import { ShowCreateComponent } from '../show-create/show-create.component';
import { ShowDetailComponent } from '../show-detail/show-detail.component';

import { AdmindashboardComponent } from '../admindashboard/admindashboard.component';
import { BookingListComponent } from '../booking-list/booking-list.component';

import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AdmindashboardComponent,
    TheatreListComponent,
    TheatreCreateComponent,
    TheatreDetailComponent,
    MovieListComponent,
    MovieCreateComponent,
    MovieDetailComponent,
    ShowListComponent,
    ShowCreateComponent,
    ShowDetailComponent,
    BookingListComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule

  ]
})
export class AdminModule {
  constructor() {
    console.log('AdminModule loaded!');
  }
 }
