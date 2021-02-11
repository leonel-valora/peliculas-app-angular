import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Movie, MovieListResponse } from '../interfaces/movie-list-response';
import { catchError, map, tap } from 'rxjs/operators';
import { MovieResponse } from '../interfaces/movie-response';
import { CreditsResponse , Cast } from '../interfaces/credits-response';
@Injectable({
  providedIn: 'root'
})
export class PeliculasService {
  private baseUrl: string = 'https://api.themoviedb.org/3';
  private carteleraPage = 1;
  public cargando: boolean = false;
  constructor(private http: HttpClient) { }

  get params() {
    return {
      api_key: '130bfee679ac9d477ccf095c0102ca04',
      language: 'es-MX',
      page: this.carteleraPage.toString()
    }
  }

  resetCarteleraPage() {
    this.carteleraPage = 1;
  }

  getMovies(): Observable<Movie[]> {
    if ( this.cargando ) {
      // cargando peliculas
      return of([]);
    }
    this.cargando = true;
    return this.http.get<MovieListResponse>(`${ this.baseUrl }/movie/now_playing`,{
      params: this.params
    })
    .pipe(
      map( (resp) => resp.results ),
      tap( () => {
        this.carteleraPage += 1;
        this.cargando = false;
      })
    );
  }

  searchMovies(pelicula: string): Observable<Movie[]> {
    const params = {...this.params, page: '1', query: pelicula };
    return this.http.get<MovieListResponse>(`${ this.baseUrl }/search/movie`, {
      params
    }).pipe(
      map( resp => resp.results )
    );
  }

  getMovieDetails(id: string): Observable<MovieResponse> {
    return this.http.get<MovieResponse>(`${ this.baseUrl }/movie/${ id }`, {
      params: this.params
    }).pipe(
      catchError( err => of(null) )
    );
  }

  getMovieCast(id: string): Observable<Cast[]> {
    return this.http.get<CreditsResponse>(`${ this.baseUrl }/movie/${ id }/credits`, {
      params: this.params
    }).pipe(
      map( resp => resp.cast ),
      catchError( err => of([]) ),
    );
  }
}
