import { Component } from '@angular/core';
import { Observable, map } from 'rxjs';
import { MovieService } from '../movie.service';
import { Movie } from '../app.component';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  title = 'NTT-Movie-A16';
  movie$: Observable<Movie[]> | undefined;
}
