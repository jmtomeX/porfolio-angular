import { Component, ElementRef, OnInit, Renderer2, ViewChild  } from '@angular/core';
import { Router } from '@angular/router';
import { ProyectosService } from '../../services/proyectos.service';
@Component({
  selector: 'app-portafolio',
  templateUrl: './portafolio.component.html',
  styleUrls: ['./portafolio.component.css']
})
export class PortafolioComponent implements OnInit {
  @ViewChild('divLogo')divLogo: ElementRef;
  constructor(
    public projectService: ProyectosService,
    private router: Router,
    private renderer: Renderer2) {
     }

  ngOnInit(): void {

  }
  search(logo: string) {
    // this.renderer.removeClass(this.divLogo.nativeElement, '');
    this.renderer.addClass(this.divLogo.nativeElement, 'enter-search');

    setTimeout(() => {
      this.router.navigate(['./search/' + logo]);
    }, 1500);
  }
}
