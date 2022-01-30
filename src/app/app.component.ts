import { Component, OnInit} from '@angular/core';
import {IPost, PostsLoadService} from "./posts-load.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  postDataSource: Array<IPost>;

  constructor(private postLoadServise: PostsLoadService) {
    this.postDataSource = new Array<IPost>();
  }

  ngOnInit() {
    this.postLoadServise.getPosts().subscribe(data => this.postDataSource = data)
  }
}
