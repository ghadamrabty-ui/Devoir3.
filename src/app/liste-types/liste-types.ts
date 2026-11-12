import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaquillageService } from '../services/maquillage.service';
import { TypeMaquillage } from '../model/type.model';
import { UpdateType } from '../updatetypes/updatetypes';
import { Observable } from 'rxjs';

@Component({
  imports: [CommonModule, UpdateType],
  selector: 'app-liste-types',
  styles: ``,
  templateUrl: './liste-types.html',
})
export class ListeTypes implements OnInit {

  types!: TypeMaquillage[];
  updatedType: TypeMaquillage = { idType: 0, nomType: '' };
  ajout: boolean = true;

  constructor(private maquillageService: MaquillageService) { }

  ngOnInit(): void {
    this.chargerTypes();
  }

  chargerTypes(): void {
  this.maquillageService.listeTypes().subscribe({
    next: (reponse) => {
      const donnees = reponse as unknown as
        | TypeMaquillage[]
        | { _embedded?: { types?: TypeMaquillage[] } };

      this.types = Array.isArray(donnees)
        ? donnees
        : donnees._embedded?.types ?? [];

      console.log('Types reçus par le serveur :', reponse);
      console.log('Types affichés dans le tableau :', this.types);
    },
    error: (erreur) => {
      console.error('Erreur pendant le chargement des types :', erreur);
    },
  });
}


  typeUpdated(type: TypeMaquillage) {
    if (this.ajout) {
      this.maquillageService.ajoutertype(type);
    } else {
      this.maquillageService.modifierType(type);
    }
    this.chargerTypes();
    this.updatedType = { idType: 0, nomType: '' };
    this.ajout = true;
  }

  updateType(type: TypeMaquillage) {
    this.updatedType = { ...type };
    this.ajout = false;
  }
}