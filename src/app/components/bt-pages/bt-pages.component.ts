import { Component, OnInit, Output } from '@angular/core';
import { PopularsMoviesService } from 'src/app/services/populars-movies.service';


@Component({
  selector: 'app-bt-pages',
  templateUrl: './bt-pages.component.html',
  styleUrls: ['./bt-pages.component.scss']
})
export class BtPagesComponent implements OnInit {

  currentPage: number;
  numPages: number;

  constructor(private popularService: PopularsMoviesService) {
    this.currentPage = 1;
    this.numPages = 0;
  }



}
