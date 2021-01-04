import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './modules/header/header/header.component';
import { HeaderMobileComponent } from './modules/header/header-mobile/header-mobile.component';
import { HeaderPromotionComponent } from './modules/header/header-promotion/header-promotion.component';
import { NewsletterComponent } from './modules/header/newsletter/newsletter.component';
import { FooterComponent } from './modules/header/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeaderMobileComponent,
    HeaderPromotionComponent,
    NewsletterComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
