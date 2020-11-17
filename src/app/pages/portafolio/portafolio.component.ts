import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProyectosService } from '../../services/proyectos.service';
@Component({
  selector: 'app-portafolio',
  templateUrl: './portafolio.component.html',
  styleUrls: ['./portafolio.component.css']
})
export class PortafolioComponent implements OnInit {

  constructor(
    public projectService: ProyectosService,
    private router: Router) { }

  ngOnInit(): void {

  }
  search(logo: string) {
    this.router.navigate(['./search/' + logo]);
  }

}
