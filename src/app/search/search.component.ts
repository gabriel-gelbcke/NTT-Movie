import { Component, ElementRef, ViewChild } from '@angular/core';
import { MovieService } from '../movie.service';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Movie, Search } from '../app.component';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {
// getMovieByTitle(arg0: string) {
// throw new Error('Method not implemented.');
// }





private url : string= "https://www.omdbapi.com/?apikey=889e981a"
 
constructor(private http: HttpClient) {}

  getMovieByTitle(query:string): Observable<Movie[]>{
    
    return this.http.get<Search>(`${this.url}&s="${query}"`).pipe(map(result =><Movie[]>result.Search))
  }

  getMovieById(query:string): Observable<Movie> {
    return this.http.get<Movie>(`${this.url}&plot=full&i=${query}`);
  }

}
