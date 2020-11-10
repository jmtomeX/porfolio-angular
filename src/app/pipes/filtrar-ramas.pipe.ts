import { Pipe, PipeTransform } from '@angular/core';
import { Curso } from '../models/curso';
@Pipe({
  name: 'filtrarRamas'
})
export class FiltrarRamasPipe implements PipeTransform {

  transform(value: Curso[], ...args: unknown[]): unknown {
    let branchOrder: Curso[];
    branchOrder = value.filter(x => x.rama === 'informatica').sort((a, b) => {
      if (a.anno < b.anno) {
        return 1;
      }
      // tslint:disable-next-line: triple-equals
      if (a.anno > b.anno) {
        return -1;
      }
      return 0;
    });
    return branchOrder;
  }

}
