import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie } from 'src/app/interfaces/movie-list-response';
import { PeliculasService } from 'src/app/services/peliculas.service';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.css']
})
export class BuscarComponent implements OnInit {
  public pelicula = '';
  public peliculas: Movie[] = [];
  constructor(private activatedRoute: ActivatedRoute, private peliculasService: PeliculasService) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(resp => {
      console.log(resp);
      this.pelicula = resp.pelicula;
      this.peliculasService.searchMovies(this.pelicula).subscribe( resp => {
        this.peliculas = resp;
      });
    });
  }

}
