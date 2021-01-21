import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {MovieService} from "../../services/movie.service";

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {
  movieId :any;
  movieDetalis:any;
  constructor(private route:ActivatedRoute , private movSer:MovieService) { }

  ngOnInit(): void {
    //get movie id from params
    this.route.queryParams.subscribe(r=>{
      this.movieId = r['id'];
    })
    //send id to service to get movie details
    this.movSer.getMovieDetails(this.movieId).subscribe(res=>{
      // console.log(res)
     this.movieDetalis = res;
    },error => {
      console.log(error)
      //error hanlder
    })
  }

}
