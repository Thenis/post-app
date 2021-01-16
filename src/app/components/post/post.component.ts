import { Component, HostListener, Input, OnInit } from '@angular/core';
import { Post } from 'src/app/models/post';

export enum PostContentEnum {
  ID,
  POST_ID,
}

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
})
export class PostComponent implements OnInit {
  @Input()
  post!: Post;

  activePostContent: PostContentEnum = PostContentEnum.ID;
  postContent = PostContentEnum;

  constructor() {}

  ngOnInit(): void {}

  @HostListener('click')
  handlePostClick() {
    if (this.activePostContent === PostContentEnum.ID) {
      this.activePostContent = PostContentEnum.POST_ID;
    } else {
      this.activePostContent = PostContentEnum.ID;
    }
  }
}
