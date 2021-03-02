import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs/observable';

import { Movie, MovieDetail } from './movie.model';

@Injectable()
export class MovieService {

  private API_KEY = `e869a574`;

  constructor(private http: HttpClient) { }

  searchMovie(searchQuery: string): Observable<Array<Movie>> {
    return this.http.get(`https://omdbapi.com/?apikey=${this.API_KEY}&s=${searchQuery}`)
      .pipe(
        map((response: any) => response.Search)
      );
  }

  getMovieDetails(imdbId: string): Observable<MovieDetail> {
    return this.http.get(`https://www.omdbapi.com/?i=${imdbId}&plot=full&apikey=${this.API_KEY}`);
  }

}