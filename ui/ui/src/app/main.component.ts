import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  template: `
    <app-header></app-header>
    <div class="main-panel">
    <div class="shadow-lg sidebar">
    <app-side-bar></app-side-bar>
    </div>
    <router-outlet></router-outlet>
    </div>
    `
  // <app-footer></app-footer>
})
export class MainComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
