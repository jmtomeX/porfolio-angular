import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProyectosService } from '../../services/proyectos.service';
import { ProjectDescription } from '../../interfaces/project-description.interface';
import { StorageService } from '../../services/storage.service';
import { Proyecto } from '../../models/proyecto';
@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  id;
  dataProject: any = {};
  descriptionProject: any = {};
  constructor(
    private route: ActivatedRoute,
    // tslint:disable-next-line:variable-name
    private _localStorage: StorageService,
    public projectService: ProyectosService) { }

  ngOnInit(): void {


    this.route.params
      .subscribe((parametros) => {
        //  console.log(parametros['id']);
        this.projectService.getProjectDescriptions(parametros['id'])
          .subscribe((project: ProjectDescription) => {
            // recoger las descripciones de los proyectos
            this.descriptionProject = project;
            this.id = parametros['id'];
            this.getLocalStoraGeItem();
          });
      });
  }

  private async getLocalStoraGeItem() {
    const storage = await this._localStorage.getObject('proyectos');
    this.dataProject = storage.find(project => project.cod === this.id);
  }


}

