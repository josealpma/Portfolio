import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

  constructor() { }

  Items: any = [
    {
      Title: 'Dashboard',
      Description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero velit omnis quae corporis veritatis unde quam optio sunt enim. Fugit voluptatibus sit, quis assumenda odit aperiam. Quos quisquam magni officiis!',
      Languages: '',
      Url: '',
      Img: '',
    }
  ];

  ngOnInit(): void {
  }

}
