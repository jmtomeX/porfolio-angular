import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InfoPagina } from '../interfaces/info-pagina.interfaces';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {
  info: InfoPagina = {};
  formation: any[] = [];
  cargada = false;
  constructor(private http: HttpClient) {
    this.loadInfo();
    this.loadFormation();
  }

  private loadInfo() {
    // leer archivo json
    this.http.get('assets/data/data-page.json')
      .subscribe(resp => {
        this.cargada = true;
        this.info = resp;
      });
  }

  // leer formación de la base de datos firebase
  private loadFormation() {
    this.http.get('https://angular-html-b73cd.firebaseio.com/formacion.json')
      .subscribe((resp: any[]) => {
        this.formation = resp['formacion'];
        console.log(resp);

      })
  }
}
