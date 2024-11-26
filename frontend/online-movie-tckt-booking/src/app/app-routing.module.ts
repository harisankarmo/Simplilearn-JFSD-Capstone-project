import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { CustomerdashboardComponent } from './customerdashboard/customerdashboard.component';

import { TheatreCreateComponent } from './theatre-create/theatre-create.component';

import { FrontMovieListingComponent } from './front-movie-listing/front-movie-listing.component';

const routes: Routes = [
  {path:"", component:LoginComponent},
  {path: "signup", component:SignupComponent},
  {path: "login", redirectTo: "", pathMatch: "full"},
  {path: "dashboard", component: CustomerdashboardComponent},    

  {path: "movie-listing", component: FrontMovieListingComponent},

  { path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule) },  


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
