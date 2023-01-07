import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import{AppRoutingModule} from './app-routing.module';
import { NavBarComponent } from './home/nav-bar/nav-bar.component';
import { HeroComponent } from './home/hero/hero.component';
import { MainComponent } from './home/main/main.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { CardComponent } from './home/card/card.component';
import { HttpClientModule } from '@angular/common/http';
import { PartnerComponent } from './home/partner/partner.component';
import { StatComponent } from './home/stat/stat.component';
import { FooterComponent } from './home/footer/footer.component';
import { SwiperModule } from 'swiper/angular';
import { BannerComponent } from './home/banner/banner.component';
import { DettailsComponent } from './home/dettails/dettails.component';
import { ConsulenzaComponent } from './consulenza/consulenza.component';
import { UpnavComponent } from './home/upnav/upnav.component';
import { CarouselComponent } from './home/carousel/carousel.component';

@NgModule({
  declarations: [
    AppComponent,

    HomeComponent,
    NavBarComponent,
    HeroComponent,
    MainComponent,
    ReviewsComponent,
    CardComponent,
    PartnerComponent,
    StatComponent,
    FooterComponent,
    BannerComponent,
    DettailsComponent,
    ConsulenzaComponent,
    UpnavComponent,
    CarouselComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SwiperModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
