import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './feature/login/login.component';
import { CategoryComponent } from './feature/category/category.component';
import { ContentComponent } from './feature/content/content.component';
import { FileManagerComponent } from './feature/file-manager/file-manager.component';
import { IngredientComponent } from './feature/ingredient/ingredient.component';
import { MenuComponent } from './feature/menu/menu.component';
import { ProfileComponent } from './feature/profile/profile.component';
import { TagComponent } from './feature/tag/tag.component';
import { UploadComponent } from './feature/upload/upload.component';

import { MainComponent } from './main.component';

import { AuthGuardService } from './provider/auth-gaurd.service';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: '',
    component: MainComponent,
    // canActivate: [AuthGuardService],
    children: [
      { path: 'category', component: CategoryComponent },
      { path: 'content', component: ContentComponent },
      { path: 'file-manager', component: FileManagerComponent },
      { path: 'ingredient', component: IngredientComponent },
      { path: 'menu', component: MenuComponent },
      { path: 'profile', component: ProfileComponent },
      { path: 'tag', component: TagComponent },
      { path: 'upload', component: UploadComponent },
      { path: '', redirectTo: 'content', pathMatch: 'full' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }