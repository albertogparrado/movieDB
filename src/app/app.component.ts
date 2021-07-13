import { Component } from '@angular/core';
import {PopularsMoviesService} from './services/populars-movies.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'MovieDB';

  arrMoviePopular: any[] = [];

  currentPage: number;
  numPages: number;

  constructor(private popularService: PopularsMoviesService){
    this.currentPage = 1;
    this.numPages = 0;
  }

  ngOnInit(){
     this.popularService.getAll()
     .then(res => {
      this.arrMoviePopular = res['results'];
      this.numPages = res['total_pages'];
      console.log(this.arrMoviePopular)
     })
  }

  getPopular(){
    this.popularService.getAll()
     .then(res => {
      this.arrMoviePopular = res['results'];
      console.log(this.arrMoviePopular)
     })
  }

  async changePage(siguiente: boolean){
    if (siguiente){ this.currentPage++}
    else {this.currentPage--}

    const resultsChange = await this.popularService.getAll(this.currentPage)
    this.arrMoviePopular = resultsChange['results'];
  }
}
