import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ConsulenzaComponent } from "./consulenza/consulenza.component";
import { HomeComponent } from "./home/home.component";
import { ReviewsComponent } from "./reviews/reviews.component";



const routes: Routes =[

  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'recensioni',
    component: ReviewsComponent
  },
  {
    path: 'consulenza',
    component: ConsulenzaComponent
  }

]


@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports:[RouterModule]

})
export class AppRoutingModule {






}
