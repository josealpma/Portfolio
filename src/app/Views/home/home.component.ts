import { Component, OnInit } from '@angular/core';
import { HeaderService } from 'src/app/Services/header/header.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private headerService: HeaderService) { }

  ngOnInit(): void {
    this.headerService.Toggle(true);
  }

  ngOnDestroy(): void{
    this.headerService.Toggle(false);
  }

}
