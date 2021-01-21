import { Cat } from './../../models/cat.model';
import { Category } from './../../models/category.model';
import { Res } from './../../models/res.model';
import { MovieService } from './../../services/movie.service';
import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/models/movie.model';
import { ActivatedRoute } from '@angular/router';
import {animate, animation, style, transition, trigger} from "@angular/animations";


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  // animations:[
  //   trigger('fadeIn',[
  //     transition(":enter",[
  //       style({opactiy:0}),
  //       animate('1000s',style({opacity:1}))
  //     ])
  //   ])
  // ]
})
export class HomeComponent implements OnInit {
  catFilter: any;
  movie: Movie[] = [];
  cat:Category[] = [];
  loading:boolean = true;

  constructor(private movSer: MovieService, private route:ActivatedRoute) { }

  ngOnInit() {
    //get categories to filter
    this.route.queryParams.subscribe(r => {
      // console.log(r)
      this.catFilter = r['cat'];
      // console.log(this.catFilter)
    })

    //get most popular movies
    this.movSer.getMovies().subscribe((result: Res) => {
      this.loading = false
      // console.log(result)
      this.movie.push(...result.results)
      // console.log(this.movie)

    }, error => {
      console.log(error)
      //error handler here
    })

    //get all categories list from api
    this.movSer.getCategoryList().subscribe((r:Cat) => {
      // console.log(r)
      this.cat.push(...r.genres)
      // console.log(this.cat)
    }, error => {
      console.log(error)
      //error handler here
    })
  }


}
