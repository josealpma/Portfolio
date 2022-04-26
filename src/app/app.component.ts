import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { HeaderService } from './Services/header/header.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Portfolio';

  constructor(private location: Location,
    private headerService: HeaderService) { }

  ngOnInit(): void{
    if(this.location.path() != "/home" || this.location.path() != '/') { this.headerService.Toggle(false) 
    } else { this.headerService.Toggle(true) }
  }

}
