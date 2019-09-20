import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

/** Third party module */
import { NgxSpinnerModule } from "ngx-spinner";

/** Importing Components */
import { AppComponent } from './app.component';
import { MainComponent } from './main.component';

/**
 * Importing Modules
 */
import { AppRoutingModule } from './/app-routing.module';
import { FeatureModule } from './feature/feature.module';
import { SharedModule } from './shared/shared.module';

/** Import Services */
import { TokenInterceptor } from './provider/http-interceptor.service';

import {MatButtonModule} from '@angular/material/button';
import {MatCheckboxModule} from '@angular/material/checkbox';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgxSpinnerModule,
    AppRoutingModule,
    FeatureModule,
    SharedModule,
    MatButtonModule, MatCheckboxModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }