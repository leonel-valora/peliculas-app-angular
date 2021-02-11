import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Movie } from 'src/app/interfaces/movie-list-response';
import SwiperCore , { Pagination } from 'swiper/core';

SwiperCore.use([Pagination]);
@Component({
  selector: 'app-swiper',
  templateUrl: './swiper.component.html',
  styleUrls: ['./swiper.component.css']
})
export class SwiperComponent implements OnInit {

  @Input() peliculas: Movie[];
  constructor(private router: Router) { }
  ngOnInit() {
  }

  onSwiper(swiper) {
    console.info(swiper.params);
  }
  onSlideChange() {
    console.log('slide change');
  }

  showMovie(id: string) {
    this.router.navigate(['/pelicula', id]);
  }
}
