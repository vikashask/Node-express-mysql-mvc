import { Component, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Router } from '@angular/router';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {

  imageDomain = environment.imageDomain;
  items = [
    { title: 'Content Library', path: 'content', imgSrc: environment.imageDomain + '/content-library.png', active: true },
    { title: 'Upload Video', path: 'upload', imgSrc: environment.imageDomain + '/plus.png', active: false },
    { title: 'Tags', path: 'tag', imgSrc: environment.imageDomain + '/tag.png', active: false },
    { title: 'Ingredients', path: 'ingredient', imgSrc: environment.imageDomain + '/ingredients.png', active: false },
    { title: 'Categores', path: 'category', imgSrc: environment.imageDomain + '/category.png', active: false },
    { title: 'Menu', path: 'menu', imgSrc: environment.imageDomain + '/menu.png', active: false },
    { title: 'File Manager', path: 'file-manager', imgSrc: environment.imageDomain + '/file-manager.png', active: false },
    { title: 'Profile', path: 'profile', imgSrc: environment.imageDomain + '/profile.png', active: false }
  ]

  constructor(private router: Router) { }

  ngOnInit() {
    this.updateActiveByRoute(this.router.url.substring(1));
  }

  selectMenu(item) {
    this.items.forEach(item => {
      item.active = false;
    })
    item.active = true;
    this, this.router.navigate([item.path])
  }

  updateActiveByRoute(path) {
    for (let item of this.items) {
      if (item.path == path) {
        this.selectMenu(item);
        break;
      }
    }
  }

  logout() {
    sessionStorage.removeItem('token');
    this.router.navigate(['login']);
  }

}
