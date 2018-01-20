import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the PosttechProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class PosttechProvider {

  constructor(public http: Http) {
    console.log('Hello PosttechProvider Provider');
  }

  
  getPosts() { 
    return this.http.get('https://newsapi.org/v1/articles?source=techcrunch&sortBy=latest&apiKey=c85c6ac8bcc242b791337070289fdea0')
    .map(res => res.json());
  } 
   
}
