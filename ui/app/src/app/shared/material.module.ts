import { NgModule } from '@angular/core';

import {
  MatButtonModule,
  MatInputModule,
  MatCheckboxModule,
  MatSelectModule,
  MatIconModule,
  MatTabsModule,
  MatButtonToggleModule,
  MatMenuModule

  
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
    MatMenuModule
  ],
  exports: [
    MatButtonModule, 
    MatCheckboxModule,
    MatInputModule,
    MatSelectModule,
    MatIconModule,
    MatTabsModule,
    MatButtonToggleModule,
    MatMenuModule
  ],
})
export class materialModule { }
