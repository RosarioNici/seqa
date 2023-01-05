import { Component, OnInit } from '@angular/core';
import { TypeformService } from './typeform.service';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.scss']
})
export class ReviewsComponent {

constructor(private typeform: TypeformService){}

ngOnInit(): void{

//this.typeform.getReview()


}

}
