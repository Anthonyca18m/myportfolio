import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeadersComponent } from './shared/headers/headers.component';
import { FootersComponent } from './shared/footers/footers.component';

@NgModule({
  declarations: [
    AppComponent,
    HeadersComponent,
    FootersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
