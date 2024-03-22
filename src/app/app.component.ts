import { Component } from '@angular/core';
import {MovieService} from './movie.service';
import { Observable, map } from 'rxjs';

export interface Movie {
  Poster: String,
  Title: String,
  Plot: String,
  Released: String,
  Genre: String,
  Awards: String
}

export interface Search {
  Search: Movie[];
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'NTT-Movie-A16';
  // users2 = [];
  // movie$: Observable<Movie[]> | undefined;

  // constructor(private appService:MovieService){

  //     this.movie$ = this.appService.getMovieByTitle("batman").pipe(map(result => {
  //     return result;
  //    }))
  // }
}
