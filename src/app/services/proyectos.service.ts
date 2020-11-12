import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Proyecto } from '../models/proyecto';
import { AppSettings } from '../config/app-config';
@Injectable({
  providedIn: 'root'
})
export class ProyectosService {
  proyectos: Proyecto[];
  BASE_PATH = `${AppSettings.API_ENDPOINT}/proyectos_idx.json/`;
  cargando = true;
  constructor(private http: HttpClient) {
    this.loadProjects();
  }

  // tslint:disable-next-line:typedef
  private loadProjects() {
    this.http.get(this.BASE_PATH)
      .subscribe((resp: Proyecto[]) => {
        // comprobamos que llegan todos los datos de cada tarea
        const filtro = resp.map((proyecto) => Proyecto.fromJson(proyecto));
        // no añadimos si algún elemento viene como undefined
        const keys = Object.values(filtro).filter(x => x !== undefined);
        // tslint:disable-next-line:no-string-literal
        setTimeout(() => {
          this.proyectos = keys;
          this.cargando = false;
        }, 1000);
      });
  }
}


// "proyect-1": Object { anno: "2019",
//  descripcion: " id: "proyect-1" }



