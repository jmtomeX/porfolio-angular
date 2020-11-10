import { Injectable } from '@angular/core';
import { map, filter } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { InfoPagina } from '../interfaces/info-pagina.interfaces';
import { Curso } from '../models/curso';
@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {
  info: InfoPagina = {};
  cursos: Curso[] = [];
  curso;
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
      .subscribe((resp: Curso[]) => {
        // comprobamos que llegan todos los datos de cada tarea
        // const map = resp.map((curso) => Curso.fromJson(curso));
        // no añadimos si algún elemento viene como undefined
        // const keys = Object.values(map).filter(x => x !== undefined);
        // tslint:disable-next-line:no-string-literal
        this.cursos = resp;
      });
  }
}
