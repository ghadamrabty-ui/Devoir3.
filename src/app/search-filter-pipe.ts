import { Pipe, PipeTransform } from '@angular/core';
import { Maquillage } from './model/maquillage.model';

@Pipe({
  name: 'searchFilter',
  standalone: true,
})
export class SearchFilterPipe implements PipeTransform {

  transform(list: Maquillage[] | null, filterText: string): Maquillage[] {
    if (!list) {
      return [];
    }
    if (!filterText) {
      return list;
    }
    const recherche = filterText.toLowerCase();
    return list.filter(item =>
      item.nommaquillage?.toLowerCase().includes(recherche)
    );
  }
}