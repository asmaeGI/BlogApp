import { Component,OnInit ,Input} from '@angular/core';
import {Post} from '../post';
@Component({
  selector: 'app-post-list-component',
  templateUrl: './post-list-component.component.html',
  styleUrls: ['./post-list-component.component.css']
})
export class PostListComponentComponent implements OnInit {
@Input() listposts:Post[];
  constructor() { }

  ngOnInit() {
  
  }
  
  LoveIt(post:Post){
    post.loveIts++;
  }
  DontLoveIt(post:Post){
    post.loveIts--;
  }
}