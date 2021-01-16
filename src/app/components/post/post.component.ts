import {
  Component,
  HostBinding,
  HostListener,
  Input,
  OnInit,
} from '@angular/core';
import { Post } from 'src/app/models/post';

export enum PostContentEnum {
  ID = 'id',
  POST_ID = 'post-id',
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

  @HostBinding('class')
  get activeContentClass() {
    return this.activePostContent;
  }

  @HostListener('click')
  handlePostClick() {
    if (this.activePostContent === PostContentEnum.ID) {
      this.activePostContent = PostContentEnum.POST_ID;
    } else {
      this.activePostContent = PostContentEnum.ID;
    }
  }
}
