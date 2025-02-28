import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PostService } from '../../service/post.service';
import { SnackbarService } from '../../service/snackbar.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
})
export class PostComponent implements OnInit {
  postId!: string;
  postObj!: any;
  constructor(
    private _route: ActivatedRoute,
    private _postService: PostService,
    private _router: Router,
    private _snackbar: SnackbarService
  ) {}

  ngOnInit(): void {
    this.postId = this._route.snapshot.params['postId'];
    if (this.postId) {
      this._postService.fetchpost(this.postId).subscribe((res) => {
        this.postObj = { ...res, postId: this.postId };
        // console.log(this.postObj);
      });
    }
  }

  onRemove() {
    let getconfirm = confirm(`are you sure you want to remove this post`);
    if (getconfirm) {
      this._postService.onRemove(this.postObj).subscribe((_res) => {
        // console.log(res);
        // do this last
        this._snackbar.opensnackbar(
          `the ${this.postObj.title} is removed successfully`
        );
        this._router.navigate(['posts']);
      });
    }
  }
}
