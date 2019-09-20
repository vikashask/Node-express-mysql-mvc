import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { FormsModule } from '@angular/forms';

import { LoginComponent } from './login/login.component';
import { SharedModule } from '../shared/shared.module';
import { ContentComponent } from './content/content.component';
import { UploadComponent } from './upload/upload.component';
import { TagComponent } from './tag/tag.component';
import { IngredientComponent } from './ingredient/ingredient.component';
import { CategoryComponent } from './category/category.component';
import { MenuComponent } from './menu/menu.component';
import { FileManagerComponent } from './file-manager/file-manager.component';
import { ProfileComponent } from './profile/profile.component';

import {materialModule} from './../shared/material.module';
@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    materialModule,
    ReactiveFormsModule,
    FormsModule
  ],
  declarations: [LoginComponent, ContentComponent, UploadComponent, TagComponent, IngredientComponent, CategoryComponent, MenuComponent, FileManagerComponent, ProfileComponent],
  exports: [LoginComponent, ContentComponent, UploadComponent, TagComponent, IngredientComponent, CategoryComponent, MenuComponent, FileManagerComponent, ProfileComponent]
})
export class FeatureModule { }
