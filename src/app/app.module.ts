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
import { ButtonComponent } from './home/button/button.component';
import { FormazioneComponent } from './formazione/formazione.component';
import { StartComponent } from './start/start.component';
import { AuditComponent } from './audit/audit.component';
import { CertificazioniComponent } from './certificazioni/certificazioni.component';
import { AnalisiComponent } from './analisi/analisi.component';
import { AboutComponent } from './about/about.component';
import { WhereComponent } from './where/where.component';
import { TermsComponent } from './terms/terms.component';
import { StoreComponent } from './formazione/store/store.component';
import { BlogComponent } from './blog/blog.component';
import { IsoComponent } from './blog/iso/iso.component';
import { BackComponent } from './blog/back/back.component';


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
    ButtonComponent,
    FormazioneComponent,
    StartComponent,
    AuditComponent,
    CertificazioniComponent,
    AnalisiComponent,
    AboutComponent,
    WhereComponent,
    TermsComponent,
    StoreComponent,
    BlogComponent,
    IsoComponent,
    BackComponent,

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
