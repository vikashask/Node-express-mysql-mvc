// import { Component, OnInit } from '@angular/core';
import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';

export interface Food {
  value: string;
  viewValue: string;
}
export interface Games {
  value:string;
  viewValue:string;
}
export interface Movies {
  value:string;
  viewValue:string;
}
@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  date;
  selectedValue: string;

  foods: Food[] = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'}
  ];

  games: Games[] = [
    {value:'cricket', viewValue:'Cricket'},
    {value:'footbal', viewValue:'Footbal'},
    {value:'hockey', viewValue:'Hockey'},
  ];
  movies: Movies[] = [
    {value:'Bahubali', viewValue:'Bahubali'},
    {value:'Laxmibai', viewValue:'Laxmibai'},
    {value:'Munni bai', viewValue:'Munni bai'},
  ];


  constructor() {
    this.date = new Date();
   }

  ngOnInit() {
  }

}
