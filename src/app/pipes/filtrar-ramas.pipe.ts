import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtrarRamas'
})
export class FiltrarRamasPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
