import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchFilter',
  standalone: true,
})
export class searchFilterPipe implements PipeTransform {

    transform(list: any[], filterText: string): any {
    console.log("Transforming...");
    if (!filterText) return list ? list : [];
    return list ? list.filter(item => item.nomProduit.toLowerCase().includes(filterText.toLowerCase())) : [];
  }
  }
