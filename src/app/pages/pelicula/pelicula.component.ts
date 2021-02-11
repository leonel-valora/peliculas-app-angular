import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { MovieListResponse } from 'src/app/interfaces/movie-list-response';
import { MovieResponse } from 'src/app/interfaces/movie-response';
import { PeliculasService } from 'src/app/services/peliculas.service';
import { combineLatest, of } from 'rxjs';
import { Cast } from 'src/app/interfaces/credits-response';

@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html',
  styleUrls: ['./pelicula.component.css']
})
export class PeliculaComponent implements OnInit {
  public pelicula: MovieResponse;
  public cast: Cast[] = [];
  constructor(private router: Router,
              private activatedRoute: ActivatedRoute,
              private peliculasService: PeliculasService,
              private location: Location) { }

  ngOnInit() {
    const { id } = this.activatedRoute.snapshot.params;
    combineLatest([

      this.peliculasService.getMovieDetails( id ),
      this.peliculasService.getMovieCast( id )

    ]).subscribe( ( [pelicula, cast] ) => {
      if ( !pelicula ) {
        this.router.navigateByUrl('/home');
        return;
      }

      this.pelicula = pelicula;
      this.cast = cast.filter( actor => actor.profile_path !== null );
    });
  }

  backPage() {
    this.location.back();
  }

}
