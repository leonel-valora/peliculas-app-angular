import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Movie } from 'src/app/interfaces/movie-list-response';
import { PeliculasService } from 'src/app/services/peliculas.service';

@Component({
  selector: 'app-poster-grid',
  templateUrl: './poster-grid.component.html',
  styleUrls: ['./poster-grid.component.css']
})
export class PosterGridComponent implements OnInit {
  @Input() peliculas: Movie[];
  constructor(private router: Router) { }

  ngOnInit() {
  }
  showMovie(id: string) {
      this.router.navigate(['/pelicula', id]);
  }

}
