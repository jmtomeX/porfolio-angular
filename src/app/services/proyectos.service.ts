import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Proyecto } from '../models/proyecto';
import { AppSettings } from '../config/app-config';
import { StorageService } from '../services/storage.service';
@Injectable({
  providedIn: 'root'
})
export class ProyectosService {
  proyectos: Proyecto[];
  BASE_PATH = AppSettings.API_ENDPOINT;
  cargando = true;
  // tslint:disable-next-line:variable-name
  constructor(private http: HttpClient, private _localStorage: StorageService) {
    // Si hay datos en el storage se cargan
    _localStorage.getObject('proyectos')
      .then((data) => {
        // casteamos a tipo Task
        if (data) {
          this.proyectos = (data as unknown as Proyecto[]);
        }
      });
    this.loadProjects();
  }

  // tslint:disable-next-line:typedef
  private loadProjects() {
    this.http.get(this.BASE_PATH + '/proyectos_idx.json/')
      .subscribe((resp: Proyecto[]) => {
        // comprobamos que llegan todos los datos de cada tarea
        const filtro = resp.map((proyecto) => Proyecto.fromJson(proyecto));
        // no añadimos si algún elemento viene como undefined
        const keys = Object.values(filtro).filter(x => x !== undefined);
        // tslint:disable-next-line:no-string-literal
        setTimeout(() => {
          this.proyectos = keys;
          this.cargando = false;
          this._localStorage.setObject('proyectos', this.proyectos);
        }, 1000);
        // cargamos la base de datos en el storage

      });

  }
  getProjectDescriptions(id: string) {
    return this.http.get(this.BASE_PATH + '/proyectos/' + id + '.json');
  }
}




