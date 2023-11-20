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
      Title: 'Sunrey',
      Description: "Landing page for a solar equipment installation and maintenance business. The purpose of this project was to provide prospects and clients with an additional way to approach the business and obtain information.",
      Technologies: [
        { Name: 'Angular', Icon: 'devicon-angularjs-plain' },
        { Name: 'PHP', Icon: 'devicon-php-plain' }
      ],
      Url: '',
      Img: '../../../assets/img/portfolio/Sunrey.webp',
    },
    // {
    //   Title: 'Dashboard',
    //   Description: "I'm just testing iterable items :) ",
    //   Technologies: [
    //     { Name: 'Angular', Icon: 'devicon-angularjs-plain' },
    //   ],
    //   Url: '',
    //   Img: '',
    // },
    
  ];

  ngOnInit(): void {
  }

}
