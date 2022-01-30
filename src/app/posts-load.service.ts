import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from "rxjs";

export interface IPost {
  userId: number;
  id: number;
  title: string;
  body: string;
}

@Injectable({
  providedIn: 'root'
})
export class PostsLoadService {

  constructor(private http: HttpClient) { }

  getPosts(): Observable<IPost[]> {
    const url: string = 'https://jsonplaceholder.typicode.com/posts';
    return this.http.get<IPost[]>(url);
  }
}
