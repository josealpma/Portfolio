import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

declare var window: any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isVisible = true;
  counter: number = 0;
  constructor(private router: Router) { }

  taps: number = 0;

  ngOnInit(): void {
    
    this.router.events.pipe(
      filter((event): event is NavigationEnd => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {
      // Verifica la ruta actual y actualiza la propiedad isVisible
      if(event.url.toString() !== '/'){
        this.isVisible =  event.url.toString() !== '/home';
      }else{
        this.isVisible = false;
      }
      
    });
  }

  fnTapme(): void{
    this.taps += 1;
    this.counter += 1;
    if(this.taps % 5 == 0){
      window.switchMotion();
    }
  }

}

