import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BannerComponent } from './component/banner/banner.component';
import { Banner2Component } from './component/banner2/banner2.component';

@NgModule({
  declarations: [
    AppComponent,
    BannerComponent,
    Banner2Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  }

