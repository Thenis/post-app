import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from './models/post';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  posts$: Observable<Post[]>;

  constructor(private httpClient: HttpClient) {}

  ngOnInit() {
    this.posts$ = this.fetchPosts();
  }

  fetchPosts() {
    return this.httpClient.get<Post[]>(
      'https://jsonplaceholder.typicode.com/posts'
    );
  }
}
