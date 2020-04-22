import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { infoPaginaI } from '../interfaces/info-pagina-interface';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {
  
  info : infoPaginaI = {};
  cargada = false;

  constructor( private http: HttpClient ) { 

    //Leer con peticiones HTTP

    this.http.get('https://myportfolio-59f09.firebaseio.com/infopagina/footer/redesociales.json')
    .subscribe( (resp : infoPaginaI) => {

      this.cargada = true;
      this.info = resp;
    });

  }
}
