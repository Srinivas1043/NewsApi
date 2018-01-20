import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PostsportProvider } from '../../providers/postsport/postsport';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit {
  
  posts:Post[];
  
  
    constructor(public navCtrl: NavController , private PostProvider: PostsportProvider ) {
  
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