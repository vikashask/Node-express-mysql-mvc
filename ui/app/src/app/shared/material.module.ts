import { NgModule } from '@angular/core';

import {
  MatButtonModule,
  MatInputModule,
  MatCheckboxModule,
  MatSelectModule,
  MatIconModule,
  MatTabsModule
  
} from '@angular/material';

@NgModule({
  imports: [
    MatButtonModule, 
    MatCheckboxModule,
    MatInputModule,
    MatSelectModule,
    MatIconModule,
    MatTabsModule
  ],
  exports: [
    MatButtonModule, 
    MatCheckboxModule,
    MatInputModule,
    MatSelectModule,
    MatIconModule,
    MatTabsModule
  ],
})
export class materialModule { }
