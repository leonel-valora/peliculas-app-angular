import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { Movie } from 'src/app/interfaces/movie-list-response';
import { PeliculasService } from 'src/app/services/peliculas.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  public peliculas: Movie[] = [];
  public peliculasSlideshow: Movie[] = [];

  constructor(private peliculasService: PeliculasService) { }
  ngOnInit() {
    this.peliculasService.getMovies().subscribe(resp => {
      this.peliculas = resp;
      let indexTopMovie = resp.length / 4;
      indexTopMovie = Math.floor(indexTopMovie);
      this.peliculasSlideshow = resp.slice(0, indexTopMovie);
    });
  }
  @HostListener('window:scroll', ['$event'])
  onScroll() {
    const pos = (document.documentElement.scrollTop || document.body.scrollTop ) + 1300;
    const max = ( document.documentElement.scrollHeight || document.body.scrollHeight );

    if ( pos > max ) {
      // TODO: llamar el servicio
      if ( this.peliculasService.cargando ) { return; }

      this.peliculasService.getMovies().subscribe( movies => {
        this.peliculas.push(...movies );
      });
    }
  }

  ngOnDestroy() {
    this.peliculasService.resetCarteleraPage();
  }
}
