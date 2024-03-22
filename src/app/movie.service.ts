import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { HttpHeaders } from '@angular/common/http';
// import {Movie, Search} from './app.component';
import {Movie, Search} from './cards/cards.component';


@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private url : string= "https://www.omdbapi.com/?apikey=889e981a"
 
  constructor(private http: HttpClient) { }
 
    getMovieByTitle(query:string): Observable<Movie[]>{
      return this.http.get<Search>(`${this.url}&s="${query}"`).pipe(map(result =><Movie[]>result.Search))
    }
 
    getMovieById(query:string): Observable<Movie> {
      return this.http.get<Movie>(`${this.url}&plot=full&i=${query}`);
    }
}