import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InfoPagina } from '../interfaces/info-pagina.interfaces';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {
  info: InfoPagina = {};
  cargada = false;
  constructor(private http: HttpClient) {
    // leer archivo
    this.http.get('assets/data/data-page.json')
      .subscribe(resp => {
        this.cargada = true;
        this.info = resp;
        console.log(this.info);
      });
  }
}
