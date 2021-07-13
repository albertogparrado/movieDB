import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class PopularsMoviesService {

  //https://api.themoviedb.org/3/movie/popular?api_key=aebfb6e6b0d2d36628a12299eb042ea8&language=es
  /*const API_key: string = '?api_key=aebfb6e6b0d2d36628a12299eb042ea8';
    const base_URL: string = 'https://api.themoviedb.org/3/';
    const idiom:string = '&language=es';
    const popular_extension: string = 'movie/popular';*/

  popularURL: string;

  constructor(private http: HttpClient) {
    this.popularURL = 'https://api.themoviedb.org/3/movie/popular?api_key=aebfb6e6b0d2d36628a12299eb042ea8&language=es&page='
   }

   getAll(pPage = 1): Promise<any>{
    return this.http.get<any>(`${this.popularURL}${pPage}`).toPromise();
    }
}

