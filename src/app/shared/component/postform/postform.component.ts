import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PostService } from '../../service/post.service';
import { Ipost } from '../../models/post';
import { SnackbarService } from '../../service/snackbar.service';

@Component({
  selector: 'app-postform',
  templateUrl: './postform.component.html',
  styleUrls: ['./postform.component.scss'],
})
export class PostformComponent implements OnInit {
  isinEditMode: boolean = false;
  postForm!: FormGroup;
  postId!: string;
  editpostObj!: Ipost;
  constructor(
    private _route: ActivatedRoute,
    private _postService: PostService,
    private _router: Router,
    private _snackbar: SnackbarService
  ) {}

  ngOnInit(): void {
    this.createform();
    this.editmode();
  }

  editmode() {
    this.postId = this._route.snapshot.params['postId'];
    if (this.postId) {
      this.isinEditMode = true;
      //API call for post with id >> postId
      //fetch single post to pathc in form
      this._postService.fetchpost(this.postId).subscribe((res) => {
        this.editpostObj = res;
        this.postForm.patchValue(res);
        // console.log(res);
      });
      // Update API
    } else {
      this.isinEditMode = false;
    }
  }

  createform() {
    this.postForm = new FormGroup({
      title: new FormControl(null, Validators.required),
      content: new FormControl(null, Validators.required),
      userId: new FormControl(null, Validators.required),
    });
  }

  onAddpost() {
    if (this.postForm.valid) {
      let newPost = this.postForm.value;
      // Create API call
      this._postService.createpost(newPost).subscribe((_res) => {
        // console.log(res);
        // do this last
        this._snackbar.opensnackbar(
          `the ${newPost.title} is Added successfully`
        );
        this._router.navigate(['posts']);
      });
    }
  }

  onUpdate() {
    if (this.postForm.valid) {
      let updatedObj = { ...this.postForm.value, postId: this.postId };
      // console.log(updatedObj);
      this._postService.updatepost(updatedObj).subscribe((_res) => {
        // console.log(res);
        // do this last
        this._snackbar.opensnackbar(
          `the ${updatedObj.title} is Updated successfully`
        );
        this._router.navigate(['posts']);
      });
    }
  }
}
