import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RickComponent } from './Components/rick/rick.component';


@NgModule({
  declarations: [
    AppComponent,
    RickComponent
  ],
  imports: [
    BrowserModule,
   //RickComponent
  ],
  providers: [ RickComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
