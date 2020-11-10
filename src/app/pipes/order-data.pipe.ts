import { Pipe, PipeTransform } from '@angular/core';
import { Curso } from '../models/curso';
@Pipe({
  name: 'orderData'
})
export class OrderDataPipe implements PipeTransform {

  transform(value: Curso[], ...args: unknown[]): unknown {
    let dataOrder: Curso[];
    console.log("pipe" + JSON.stringify(value['anno']) );
    
    // dataOrder = value.anno.sort();
    return dataOrder;
  }

}
