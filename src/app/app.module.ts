import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { ShortenPipe } from './shorten.pipe';
import { FirstLetterPipe } from './first-letter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ShortenPipe,
    FirstLetterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
