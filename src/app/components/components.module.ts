import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { PosterGridComponent } from './poster-grid/poster-grid.component';
import { RatingModule } from 'ng-starrating';
import { SwiperComponent } from './swiper/swiper.component';
import { SwiperModule } from 'swiper/angular';
import { PipesModule } from '../pipes/pipes.module';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [NavbarComponent, PosterGridComponent, SwiperComponent],
  imports: [
    CommonModule,
    RatingModule,
    SwiperModule,
    PipesModule,
    RouterModule
  ],
  exports: [
    NavbarComponent,
    PosterGridComponent,
    SwiperComponent
  ]
})
export class ComponentsModule { }
