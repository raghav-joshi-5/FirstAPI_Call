import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostsdashComponent } from './shared/component/postsdash/postsdash.component';
import { PostComponent } from './shared/component/post/post.component';
import { PostformComponent } from './shared/component/postform/postform.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'posts',
    pathMatch: 'full',
  },
  {
    path: 'posts',
    component: PostsdashComponent,
  },
  {
    path: 'posts/addpost',
    component: PostformComponent,
  },
  {
    path: 'posts/:postId',
    component: PostComponent,
  },
  {
    path: 'posts/:postId/edit',
    component: PostformComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
