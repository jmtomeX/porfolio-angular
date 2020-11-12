import { Pipe, PipeTransform } from '@angular/core';
import { Proyecto } from '../models/proyecto';

@Pipe({
  name: 'orderProjects'
})
export class OrderProjectsPipe implements PipeTransform {

  transform(value: Proyecto[], ...args: unknown[]): unknown {
    let projectsOrder: Proyecto[];
    projectsOrder = value.sort((a, b) => {
      if (a.anno < b.anno) {
        return 1;
      }
      // tslint:disable-next-line: triple-equals
      if (a.anno > b.anno) {
        return -1;
      }
      return 0;
    });
    // console.log(projectsOrder);
    return projectsOrder;


  }
}
