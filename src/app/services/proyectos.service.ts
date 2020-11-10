import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Proyecto } from '../models/proyecto';

@Injectable({
  providedIn: 'root'
})
export class ProyectosService {
  public proyectos: Proyecto[];
  cargando = true;
  constructor(private http: HttpClient) {
    this.loadProjects();
  }

  private loadProjects() {
    this.http.get('https://angular-html-b73cd.firebaseio.com/proyectos.json')
      .subscribe((resp: Proyecto[]) => {
        // comprobamos que llegan todos los datos de cada tarea
        // const map = resp.map((proyecto) => Curso.fromJson(curso));
        // no añadimos si algún elemento viene como undefined
        // const keys = Object.values(map).filter(x => x !== undefined);
        // tslint:disable-next-line:no-string-literal
        console.log(resp);
        this.cargando = false;
        this.proyectos = resp;
      });
  }
}
