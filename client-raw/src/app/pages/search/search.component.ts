import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProyectosService } from '../../services/proyectos.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  busqueda;
  constructor(
    private route: ActivatedRoute,
    public projectService: ProyectosService
  ) { }

  ngOnInit(): void {
    this.route.params
      .subscribe(params => {
        this.projectService.searchProject(params['termino']);
        this.busqueda = params['termino'];
      });
  }

}
