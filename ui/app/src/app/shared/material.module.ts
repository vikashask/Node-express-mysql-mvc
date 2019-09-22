import { NgModule } from '@angular/core';

import {
  MatButtonModule,
  MatInputModule,
  MatCheckboxModule,
  MatSelectModule,
  MatIconModule,
  MatTabsModule,
  MatButtonToggleModule,
  MatMenuModule,
  MatSlideToggleModule

  
} from '@angular/material';

@NgModule({
  imports: [
    MatButtonModule, 
    MatCheckboxModule,
    MatInputModule,
    MatSelectModule,
    MatIconModule,
    MatTabsModule,
    MatButtonToggleModule,
    MatMenuModule,
    MatSlideToggleModule
  ],
  exports: [
    MatButtonModule, 
    MatCheckboxModule,
    MatInputModule,
    MatSelectModule,
    MatIconModule,
    MatTabsModule,
    MatButtonToggleModule,
    MatMenuModule,
    MatSlideToggleModule
  ],
})
export class materialModule { }
