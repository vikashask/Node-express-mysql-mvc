import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-company-desc',
  templateUrl: './company-desc.component.html',
  styleUrls: ['./company-desc.component.css']
})
export class CompanyDescComponent implements OnInit {

  @Input() imgSrc: String;
  @Input() title: String = '';
  @Input() subTitle: String = '';
  @Input() checked:boolean = false;

  constructor() { }

  ngOnInit() {
  }

}
