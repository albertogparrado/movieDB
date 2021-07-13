import { Component, OnInit, Output } from '@angular/core';
import { PopularsMoviesService } from 'src/app/services/populars-movies.service';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {


  //@Output arrayMov: any[];

  arrMoviePopular: any[] = [];


  constructor(private popularService: PopularsMoviesService ) { }

  ngOnInit(){
    this.popularService.getAll()
    .then(res => {
     this.arrMoviePopular = res['results'];
     //this.numPages = res['total_pages'];
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
}
