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

@NgModule({
  declarations: [
    AppComponent,

    HomeComponent,
    NavBarComponent,
    HeroComponent,
    MainComponent,
    ReviewsComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
