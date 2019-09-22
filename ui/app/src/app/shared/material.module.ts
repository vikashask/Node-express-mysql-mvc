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
  MatSlideToggleModule,
  MatTableModule

  
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
    MatSlideToggleModule,
    MatTableModule
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
    MatSlideToggleModule,
    MatTableModule
  ],
})
export class materialModule { }
