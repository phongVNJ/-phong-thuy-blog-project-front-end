import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {IBlog} from '../models/iblog';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  private URL=environment.apiUrl + '/api/blogs/'


  constructor(private http:HttpClient) {

  }
  getAllBlogByTime():Observable<IBlog>{
    return this.http.get<IBlog>(this.URL+'list');
  }

  getBlogById(id:number):Observable<IBlog>{
    return this.http.get<IBlog>(this.URL+id+'/search');
  }

  createBlog(blog: any): Observable<IBlog>{
    return this.http.post<IBlog>(this.URL+ 'create',blog);
  }
}
