import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {

  constructor() { }

  public Toggle(show: boolean){
    let header = document.getElementById("header");
    let body = document.getElementById("body");
    if(show){
      body?.classList.add("closed");
      header?.classList.remove("header-top");
    }else{
      body?.classList.remove("closed");
      header?.classList.add('header-top');
    }
  }

}
