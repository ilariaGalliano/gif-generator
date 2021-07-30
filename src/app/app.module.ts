import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GiphyComponent } from './views/giphy/giphy.component';
import { HomeComponent } from './views/home/home.component';
import { NavbarComponent } from './core/components/navbar/navbar.component';
import { GiphySearchComponent } from './views/giphy/giphy-search/giphy-search.component';

@NgModule({
  declarations: [
    AppComponent,
    GiphyComponent,
    HomeComponent,
    NavbarComponent,
    GiphySearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
