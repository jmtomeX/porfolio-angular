import { Component, OnInit } from '@angular/core';
import {ProyectosService} from '../../services/proyectos.service';
@Component({
  selector: 'app-portafolio',
  templateUrl: './portafolio.component.html',
  styleUrls: ['./portafolio.component.css']
})
export class PortafolioComponent implements OnInit {

  constructor(public projectService: ProyectosService) { }

  ngOnInit(): void {
  }

}
