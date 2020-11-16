import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Proyecto } from '../models/proyecto';
import { AppSettings } from '../config/app-config';
import { StorageService } from '../services/storage.service';
import { filter } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ProyectosService {
  proyectos: Proyecto[] = [];
  proyectosFiltrado: Proyecto[] = [];
  tecnologiasLogos: string[] = [];
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
          this.cargando = false;
        }
      });
    this.loadProjects();
  }

  // tslint:disable-next-line:typedef
  private loadProjects() {
    // Espera de carga de productos
    return new Promise((resolve, reject) => {
      this.http.get(this.BASE_PATH + '/proyectos_idx.json/')
        .subscribe((resp: Proyecto[]) => {
          // comprobamos que llegan todos los datos de cada tarea
          const filtro = resp.map((proyecto) => Proyecto.fromJson(proyecto));
          // no añadimos si algún elemento viene como undefined
          const keys = Object.values(filtro).filter(x => x !== undefined);
          this.tecnologiasLogos = this.knowTechnologies();
          resolve();
          // tslint:disable-next-line:no-string-literal
          setTimeout(() => {
            this.proyectos = keys;
            this.cargando = false;
            // cargamos la base de datos en el storage
            this._localStorage.setObject('proyectos', this.proyectos);
          }, 1000);
        });
    });



  }
  getProjectDescriptions(id: string) {
    return this.http.get(this.BASE_PATH + '/proyectos/' + id + '.json');
  }

  searchProject(termino: string) {
    if (this.proyectos.length === 0) {
      // esperar a cargar productos
      this.loadProjects()
        .then(() => {
          // aplicar filtro
          this.filterProjects(termino);
        });
    }
    else {
      // aplicar filtro
      this.filterProjects(termino);
    }
    // this.proyectosFiltrado = this.proyectos.filter(project => {
    //   return this.proyectos;
    // });
  }

  // filtro de proyectos por busqueda
  private filterProjects(termino: string) {
    termino = termino.toLowerCase();
    this.proyectosFiltrado = [];
    const Tecnarray: string[] = [];
    this.proyectos.forEach(proyecto => {
      // pasar a minúsculas los elementos del array de tecnologías
      proyecto.tecnologias.forEach(tecnologia => {
        let tecnologiaLower: string;
        tecnologiaLower = tecnologia.toLocaleLowerCase();
        // si coincide con el termino se le añade al push
        if (tecnologiaLower.indexOf(termino) >= 0) {
          this.proyectosFiltrado.push(proyecto);
        }
      });
    });
  }

  // recoger todas las tecnologías conocidas
  private knowTechnologies(): string[] {
    const allTechnologies: string[] = [];
    this.proyectos.forEach(proyecto => {
      // pasar a minúsculas los elementos del array de tecnologías
      proyecto.tecnologias.forEach(tecnologia => {
        let tecnologiaLower: string;
        tecnologiaLower = tecnologia.toLocaleLowerCase();
        allTechnologies.push(tecnologiaLower);
      });
    });
    return this.borrarDuplicados(allTechnologies);
  }

  // eliminar elementos duplicados del array
  private borrarDuplicados(array: string[]): string[] {
    const dataArr = new Set(array);
    const result = [...dataArr];
    return result;
  }
}




