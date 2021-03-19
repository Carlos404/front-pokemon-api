import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import {NgxPaginationModule} from 'ngx-pagination';
import { PokemonDetailComponent } from './components/pokemon-detail/pokemon-detail.component';
import { BaseComponent } from './components/base/base.component';
import { OrderModule } from 'ngx-order-pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PokemonDetailComponent,
    BaseComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxPaginationModule,
    OrderModule,
    ReactiveFormsModule,
    FormsModule,
    FontAwesomeModule
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
