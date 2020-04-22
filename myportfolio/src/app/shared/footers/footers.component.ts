import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InfoPaginaService } from '../../services/info-pagina.service';

@Component({
  selector: 'app-footers',
  templateUrl: './footers.component.html',
  styleUrls: ['./footers.component.css']
})
export class FootersComponent implements OnInit {

  anio: number = new Date().getFullYear();

  constructor( public _servicio: InfoPaginaService ) { 
  }

  ngOnInit(): void {
  }

}
