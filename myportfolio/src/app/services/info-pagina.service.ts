import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Redesociales, Author, Body } from '../interfaces/info-pagina.interface';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {
  
  info_rs : Redesociales = {};
  author : Author = {};
  body : Body = {};
  celular = null;

  cargada = false;

  constructor( private http: HttpClient ) { 

    //Leer con peticiones HTTP

    this.http.get('https://myportfolio-59f09.firebaseio.com/infopagina/footer/redesociales.json')
    .subscribe( (resp : Redesociales) => {
        
      this.cargada = true;
      this.info_rs = resp;
    });

    this.http.get('https://myportfolio-59f09.firebaseio.com/infopagina/footer/author.json')
    .subscribe( (resp : Author) => {

      this.cargada = true;
      this.author = resp;
    });

    this.http.get('https://myportfolio-59f09.firebaseio.com/infopagina/body.json')
    .subscribe( (resp : Body) => {

      this.cargada = true;
      this.body = resp;
      this.celular = "tel:" + resp.anexo_call + "" + resp.call;
    });

  }
}
