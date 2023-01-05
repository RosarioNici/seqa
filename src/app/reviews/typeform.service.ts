import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class TypeformService {

  constructor(private http: HttpClient){ }


getReview(url: string){
  return this.http.get(url)
}


}
