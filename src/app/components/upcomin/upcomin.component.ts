import { Component, OnInit } from '@angular/core';
import {MovieService} from "../../services/movie.service";
import {Movie} from "../../models/movie.model";
import {Res} from "../../models/res.model";

@Component({
  selector: 'app-upcomin',
  templateUrl: './upcomin.component.html',
  styleUrls: ['./upcomin.component.css']
})
export class UpcominComponent implements OnInit {
  upcoming:Movie[]=[];
  loading:boolean=true;
  constructor(private movieSer:MovieService) { }

  ngOnInit(): void {
    // get upcoming movies
    this.movieSer.getUpcoming().subscribe((res:Res)=>{
      this.loading=false
      this.upcoming.push(...res.results)
    },error => {
      console.log(error)
      //error handler
    })
  }

}
