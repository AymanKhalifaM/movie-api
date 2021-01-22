import { Cat } from './../models/cat.model';
import { Res } from './../models/res.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  urlPoplar = "https://api.themoviedb.org/3/movie/popular?api_key=53863d3939659f1da83139fdb1862345&language=en-US&page=";
  urlCat ="https://api.themoviedb.org/3/genre/movie/list?api_key=53863d3939659f1da83139fdb1862345&language=en-US"
  urlTopRated="https://api.themoviedb.org/3/movie/top_rated?api_key=53863d3939659f1da83139fdb1862345&language=en-US&page=1";
  urlUpcoming = "https://api.themoviedb.org/3/movie/upcoming?api_key=53863d3939659f1da83139fdb1862345&language=en-US&page=1"

  constructor(private http: HttpClient) { }

  getMovies(id:number) {
    return this.http.get<Res>(this.urlPoplar+id)
  }

  getCategoryList() {
    return this.http.get<Cat>(this.urlCat)
  }

  getMovieDetails(id:number){
    return this.http.get(`https://api.themoviedb.org/3/movie/${id}?api_key=53863d3939659f1da83139fdb1862345&language=en-US`);
  }

  async getTopRated(){
    const res = await  fetch(this.urlTopRated);
    const json = await  res.json();
    return json.results
  }


  getUpcoming(){
    return this.http.get<Res>(this.urlUpcoming)
  }




}
