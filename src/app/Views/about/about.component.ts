import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  myAge: number = 0;

  constructor() { }

  ngOnInit(): void {
    const _MS_PER_DAY = 1000 * 60 * 60 * 24;
    let a = new Date('07/07/1999')
    let b = new Date()
    // Discard the time and time-zone information.
    const utc1 = Date.UTC(a.getFullYear(), a.getMonth(), a.getDate());
    const utc2 = Date.UTC(b.getFullYear(), b.getMonth(), b.getDate());

    this.myAge = Math.floor((utc2 - utc1) / _MS_PER_DAY / 365);
  }

}
