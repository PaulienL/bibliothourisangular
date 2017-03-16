import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { Overview } from './bookoverviewcomponent/overview';


@NgModule({ 
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  
  declarations: [
    AppComponent,
    Overview,
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
