import { Component, OnInit } from '@angular/core';
import { PostService } from '../../service/post.service';
import { Ipost } from '../../models/post';

@Component({
  selector: 'app-postsdash',
  templateUrl: './postsdash.component.html',
  styleUrls: ['./postsdash.component.scss'],
})
export class PostsdashComponent implements OnInit {
  postArr: Array<Ipost> = [];
  constructor(private _postService: PostService) {}

  ngOnInit(): void {
    this._postService.fetchallposts().subscribe((res) => {
      this.postArr = res;
    });
  }
}
