import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ComponentsModule } from '../components/components.module';
import { BuscarComponent } from './buscar/buscar.component';
import { PeliculaComponent } from './pelicula/pelicula.component';
import { PipesModule } from '../pipes/pipes.module';
import { RatingModule } from 'ng-starrating';
import { SwiperModule } from 'swiper/angular';


@NgModule({
  declarations: [HomeComponent, BuscarComponent, PeliculaComponent],
  imports: [
    CommonModule,
    ComponentsModule,
    PipesModule,
    RatingModule,
    SwiperModule
  ],
  exports: [
    HomeComponent,
    BuscarComponent
  ]
})
export class PagesModule { }
