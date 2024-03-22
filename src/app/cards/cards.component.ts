import { Component } from '@angular/core';
import { Observable, map } from 'rxjs';
import { MovieService } from '../movie.service';


export interface Movie {
  Poster: String,
  Year: String,
  Title: String,
  Type: string,
  Plot: String,
  Released: String,
  Genre: String,
  Awards: String
}

export interface Search {
  Search: Movie[];
}

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent {
  title = 'NTT-Movie-A16';
  movie$: Observable<Movie[]> | undefined;
  query: any;

  constructor(private appService:MovieService){

      this.movie$ = this.appService.getMovieByTitle("batman").pipe(map(result => {
        console.log(result);
        
      return result;
     }))
  }
}