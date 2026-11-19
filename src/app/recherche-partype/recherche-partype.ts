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
  styles: []
})
export class RecherchePartype implements OnInit {

  maquillages: Maquillage[] = [];
  tousLesMaquillages: Maquillage[] = [];
  types: TypeMaquillage[] = [];
  idType: number | null = null;

  constructor(private maquillageService: MaquillageService) {}

  ngOnInit(): void {

    this.maquillageService.listeTypes().subscribe({
      next: (ts) => {
        this.types = ts;
        console.log('Types = ', this.types);
      },
      error: (err) => {
        console.error('Erreur types :', err);
      }
    });

    this.maquillageService.listeMaquillages().subscribe({
      next: (maqs) => {
        this.tousLesMaquillages = maqs;
        this.maquillages = maqs;
      },
      error: (err) => {
        console.error('Erreur maquillages :', err);
      }
    });
  }

  onTypeChange(): void {

    if (this.idType == null) {
      this.maquillages = this.tousLesMaquillages;
      return;
    }

    this.maquillages = this.tousLesMaquillages.filter(
      m => m.type?.idtyp == this.idType
    );
  }

}