import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PosttechProvider } from '../../providers/posttech/posttech';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage implements OnInit{
  
  posts:Post[];
  
  
    constructor(public navCtrl: NavController , private PostProvider: PosttechProvider ) {
  
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