import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
import {TopRatedComponent} from "./components/top-rated/top-rated.component";
import {MovieDetailsComponent} from "./components/movie-details/movie-details.component";
import {UpcominComponent} from "./components/upcomin/upcomin.component";

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'top-rated',component:TopRatedComponent},
  {path:'movie-details',component:MovieDetailsComponent},
  {path:'up-coming',component:UpcominComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
