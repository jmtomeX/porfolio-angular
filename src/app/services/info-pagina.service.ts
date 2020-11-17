import { Injectable } from '@angular/core';
import { map, filter } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { InfoPagina } from '../interfaces/info-pagina.interfaces';
import { Curso } from '../models/curso';
import { AppSettings } from '../config/app-config';
@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {
  info: InfoPagina = {};
  cursos: Curso[] = [];
  BASE_PATH = `${AppSettings.API_ENDPOINT}/formacion.json/`;
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

    this.http.get(this.BASE_PATH)
      .subscribe((resp: Curso[]) => {
        // comprobamos que llegan todos los datos de cada tarea
        const filtro = resp.map((curso) => Curso.fromJson(curso));
        // no añadimos si algún elemento viene como undefined
        const keys = Object.values(filtro).filter(x => x !== undefined);
        this.cursos = resp;
      });
  }
}
