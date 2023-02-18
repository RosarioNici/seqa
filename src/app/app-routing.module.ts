import { Component, NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ConsulenzaComponent } from "./consulenza/consulenza.component";
import { HomeComponent } from "./home/home.component";
import { ReviewsComponent } from "./reviews/reviews.component";
import { AboutComponent } from "./about/about.component";
import { AnalisiComponent } from "./analisi/analisi.component";
import { AuditComponent } from "./audit/audit.component";
import { CertificazioniComponent } from "./certificazioni/certificazioni.component";
import { FormazioneComponent } from "./formazione/formazione.component";
import { StartComponent } from "./start/start.component";
import { TermsComponent } from "./terms/terms.component";
import { WhereComponent } from "./where/where.component";
import { StoreComponent } from "./formazione/store/store.component";
import { BlogComponent } from "./blog/blog.component";
import { IsoComponent } from "./blog/iso/iso.component";




const routes: Routes =[

  {path: '', component: HomeComponent},
  {path: 'recensioni', component: ReviewsComponent},
  {path: 'consulenza', component: ConsulenzaComponent},
  {path: 'audit', component: AuditComponent},
  {path: 'analisi', component: AnalisiComponent},
  {path: 'about', component: AboutComponent },
  {path: 'certificazioni', component: CertificazioniComponent},
  {path: 'formazione', component: FormazioneComponent},
  {path: 'store', component: StoreComponent},
  {path: 'terms', component: TermsComponent},
  {path: 'dove', component: WhereComponent},
  {path: 'avvio', component: StartComponent},
  {path: 'school', component: BlogComponent},
  {path: 'iso', component: IsoComponent}


]


@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports:[RouterModule]

})
export class AppRoutingModule {






}
