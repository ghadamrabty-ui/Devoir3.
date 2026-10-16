import { Component , OnInit  } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Maquillage } from '../model/maquillage.model';
import { TypeMaquillage } from '../model/type.model';
import { MaquillageService } from '../maquillage.service';

@Component({
  selector: 'app-recherche-partype',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './recherche-partype.html',
  styles: ``,
})
export class RecherchePartype  implements OnInit {

  maquillages!: Maquillage[];
  idType!: number;
  types!: TypeMaquillage[];

  constructor(private maquillageService: MaquillageService) {}

ngOnInit() : void {

  this.maquillageService.listeTypes().subscribe ( ts => {
    this.types = ts._embedded.types;
    console.log(ts);
  });
}

onTypeChange() {
  this.maquillageService.rechercherPartype(this.idType).subscribe(maqs => {
    this.maquillages = maqs;});
}
}

  
