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
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSliderModule } from '@angular/material/slider';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
// Material Navigation
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
// Material Layout
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatListModule } from '@angular/material/list';
import { MatStepperModule } from '@angular/material/stepper';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTreeModule } from '@angular/material/tree';
// Material Buttons & Indicators
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatBadgeModule } from '@angular/material/badge';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatRippleModule } from '@angular/material/core';
// Material Popups & Modals
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTooltipModule } from '@angular/material/tooltip';
// Material Data tables
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';


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
    SwiperModule,
    BrowserAnimationsModule,
    MatAutocompleteModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule,
    MatRadioModule,
    MatSelectModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatMenuModule,
    MatSidenavModule,
    MatToolbarModule,
    MatCardModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatListModule,
    MatStepperModule,
    MatTabsModule,
    MatTreeModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatBadgeModule,
    MatChipsModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    MatRippleModule,
    MatBottomSheetModule,
    MatDialogModule,
    MatSnackBarModule,
    MatTooltipModule,
    MatPaginatorModule,
    MatSortModule,
    MatTableModule
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
