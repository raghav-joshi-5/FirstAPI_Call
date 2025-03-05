import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { map, Observable } from 'rxjs';
import { Ipost } from '../models/post';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  BASEURL = `${environment.base_url}`;
  POSTURL: string = `${this.BASEURL}/posts.json`;

  constructor(private _http: HttpClient, ) {}

  fetchallposts(): Observable<Ipost[]> {
    return this._http.get<Ipost>(this.POSTURL).pipe(
      map((obj) => {
        let postArr = [];
        for (const key in obj) {
          postArr.push({ ...obj[key], postId: key });
        }
        return postArr.reverse();
      })
    );
  }

  fetchpost(id: string): Observable<any> {
    let SINGLEPOSTURL: string = `${this.BASEURL}/posts/${id}.json`;
    return this._http.get<any>(SINGLEPOSTURL);
  }

  createpost(postObj: Ipost): Observable<{ name: string }> {
    return this._http.post<{ name: string }>(this.POSTURL, postObj);
  }

  updatepost(updatepost: Ipost): Observable<Ipost> {
    let updateURL: string = `${this.BASEURL}/posts/${updatepost.postId}.json`;
    return this._http.patch<Ipost>(updateURL, updatepost);
  }

  onRemove(removeObj: Ipost) {
    let removeURL: string = `${this.BASEURL}/posts/${removeObj.postId}.json`;
    return this._http.delete<null>(removeURL);
  }
}
