import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  animations: [
    trigger('myInsertRemoveTrigger', [
      transition(':enter', [
        style({ height: '0px' }),
        animate('0.1s', style({ height: 3 * 40 + 'px' })),
      ]),
      transition(':leave', [
        animate('0.1s', style({ height: '0px' }))
      ])
    ])
  ]
})

export class HeaderComponent implements OnInit {

  openMenu = false;
  imageDomain = environment.imageDomain;
  userDetail = {
    firstName: 'Joy',
    imgSrc: environment.imageDomain + '/yum.jpeg'
  };

  companies = [{
    title: 'Yum Recipe',
    subTitle: 'Pujab Kesari',
    imgSrc: environment.imageDomain + '/yum.jpeg',
    checked: true
  },
  {
    title: 'Jugad',
    subTitle: 'Pujab Kesari',
    imgSrc: environment.imageDomain + '/yum.jpeg',
    checked: false
  },
  {
    title: 'Be There',
    subTitle: 'Pujab Kesari',
    imgSrc: environment.imageDomain + '/yum.jpeg',
    checked: false
  },
  {
    title: 'Health Plus',
    subTitle: 'Pujab Kesari',
    imgSrc: environment.imageDomain + '/yum.jpeg',
    checked: false
  }];

  selectedCompany: any;

  constructor() { }

  ngOnInit() {
    this.updateSelectedComapny();
  }

  selectComany(company) {
    this.companies.forEach(item => {
      item.checked = false;
    });
    company.checked = true;
    this, this.updateSelectedComapny();
  }

  updateSelectedComapny() {
    for (let company of this.companies) {
      if (company.checked) {
        this.selectedCompany = company;
        break;
      }
    }
  }

}
