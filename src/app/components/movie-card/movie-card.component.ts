import {Component, Input, OnInit} from '@angular/core';
import {Movie} from "../../models/movie.model";

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.css']
})
export class MovieCardComponent implements OnInit {
  @Input() mov:Movie[]=[];
  constructor() { }

  ngOnInit(): void {
  }

}
