import { Component } from '@angular/core';
import { faq } from '../formazione/faq.dat';
import { MatMenuTrigger } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-certificazioni',
  templateUrl: './certificazioni.component.html',
  styleUrls: ['./certificazioni.component.scss']
})
export class CertificazioniComponent {
faqarray = faq

isvisible= false

onClick(event: Event){
  //dobbiamo rende visibile o meno il documento
  return this.isvisible = true

}



}

