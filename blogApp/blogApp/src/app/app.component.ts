import { Component ,Input} from '@angular/core';
import {Post} from './post';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
@Input() posts: Post[]=[
{title:"Mon premier post",content:"votre AppComponent contiendra l'array des posts, et il le passera à un component PostListComponent",loveIts:0,created_at: new Date()},
{title:"Mon deuxième post",content:"votre AppComponent contiendra l'array des posts, et il le passera à un component PostListComponent",loveIts:0,created_at: new Date()},
{title:"Encore un post",content:"votre AppComponent contiendra l'array des posts, et il le passera à un component PostListComponent",loveIts:0,created_at: new Date()},
];
  title = 'blogApp';
}
