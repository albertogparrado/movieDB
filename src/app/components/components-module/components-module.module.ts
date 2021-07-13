import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BannerComponent } from '../banner/banner.component';
import { SearchBarComponent } from '../search-bar/search-bar.component';
import { BtPagesComponent } from '../bt-pages/bt-pages.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [
    BannerComponent,
    SearchBarComponent,
    BtPagesComponent
  ]
})
export class ComponentsModuleModule {

  moviesResponse: any[]

  constructor(){
    this.moviesResponse = [];
  }

}
