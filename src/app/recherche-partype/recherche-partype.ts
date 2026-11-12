
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Maquillage } from '../model/maquillage.model';
import { TypeMaquillage } from '../model/type.model';
import { MaquillageService } from '../services/maquillage.service';

@Component({
  selector: 'app-recherche-partype',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './recherche-partype.html',
  styles: [],
})
export class RecherchePartype implements OnInit {

  maquillages!: Maquillage[];
  idType!: number;
  types!: TypeMaquillage[];

  constructor(private maquillageService: MaquillageService) {}

  ngOnInit(): void {

    this.types = this.maquillageService.types;

    this.maquillageService.listeTypes().subscribe({
      next: ts => {
        if (ts._embedded && ts._embedded.types) {
          this.types = ts._embedded.types;
        }
        console.log('Types :', this.types);
      },
      error: err => {
        console.log('Erreur types :', err);
      }
    });

    this.maquillageService.listeMaquillages().subscribe(maqs => {
      this.maquillages = maqs;
      console.log('Tous les maquillages :', this.maquillages);
    });
  }

  onTypeChange() {

    console.log('Type choisi :', this.idType);

    this.maquillages = this.maquillageService.maquillages.filter(
      m => Number(m.type?.idType) === Number(this.idType)
    );

    console.log('Résultat recherche :', this.maquillages);
  }
}
