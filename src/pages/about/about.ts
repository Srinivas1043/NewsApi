import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PostProvider } from '../../providers/post/post';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage implements OnInit {

   posts:Post[];


  constructor(public navCtrl: NavController , private PostProvider: PostProvider ) {

  }
  
    ngOnInit()
    {
      this.PostProvider.getPosts().subscribe((posts)=> {
         this.posts = posts;
      });
      
    }

}

interface Post{

  author: string,
  title: string,
  description: string,
  urlToImage: any,
  publishedAt: any
}