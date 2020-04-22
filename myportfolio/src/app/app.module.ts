import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeadersComponent } from './shared/headers/headers.component';
import { FootersComponent } from './shared/footers/footers.component';
import { BannersComponent } from './shared/banners/banners.component';
import { HomeComponent } from './pages/home/home.component';
import { ProyectsComponent } from './pages/proyects/proyects.component';
import { ServicesComponent } from './pages/services/services.component';
import { ContactsComponent } from './pages/contacts/contacts.component';
import { ContactComponent } from './shared/contact/contact.component';
import { HttpClientModule } from '@angular/common/http';// permite hace peticiones a servicios Rest
import { AngularFireModule } from "@angular/fire";
import { AngularFirestoreModule } from "@angular/fire/firestore";
import { environment } from '../environments/environment';
import { ReactiveFormsModule } from "@angular/forms";
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
 

@NgModule({
  declarations: [
    AppComponent,
    HeadersComponent,
    FootersComponent,
    BannersComponent,
    HomeComponent,
    ProyectsComponent,
    ServicesComponent,
    ContactsComponent,
    ContactComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule, // permite hace peticiones a servicios Rest
    AngularFireModule.initializeApp( environment.firebaseConfig ), // para conectar con firebase
    AngularFirestoreModule, // para conectar con firebase
    ReactiveFormsModule, // para modulos reactivos de angular
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot() // ToastrModule added
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
