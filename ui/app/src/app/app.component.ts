import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div>
    <router-outlet></router-outlet>
    </div>
    <ngx-spinner></ngx-spinner>
    `
})
export class AppComponent {
}
