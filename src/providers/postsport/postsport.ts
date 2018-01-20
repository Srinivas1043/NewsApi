import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the PostsportProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class PostsportProvider {

  constructor(public http: Http) {
    console.log('Hello PostsportProvider Provider');
  }

  getPosts() { 
    return this.http.get('https://newsapi.org/v1/articles?source=espn&sortBy=top&apiKey=c85c6ac8bcc242b791337070289fdea0')
    .map(res => res.json());
  } 
   
}
