import { Component, OnInit } from '@angular/core';
import {MovieService} from "../../services/movie.service";
import {Movie} from "../../models/movie.model";

@Component({
  selector: 'app-top-rated',
  templateUrl: './top-rated.component.html',
  styleUrls: ['./top-rated.component.css']
})
export class TopRatedComponent implements OnInit {
  topRated:any;
  loading:boolean=true;
  constructor(private movSer:MovieService) { }

  ngOnInit(): void {
    // get top rated movies
    this.movSer.getTopRated().then(r=>{
      this.loading = false;
      this.topRated = r;
    },error=>{
      console.log(error)
      // error handler
    })
  }

}
