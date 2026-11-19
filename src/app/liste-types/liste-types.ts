import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaquillageService } from '../services/maquillage.service';
import { TypeMaquillage } from '../model/type.model';
import { UpdateType } from '../updatetypes/updatetypes';

@Component({
  imports: [CommonModule, UpdateType],
  selector: 'app-liste-types',
  styles: [``],
  templateUrl: './liste-types.html',
})
export class ListeTypes implements OnInit {

  types!: TypeMaquillage[];
  updatedType: TypeMaquillage = { idtyp: null, nomtyp: '' };
  ajout: boolean = true;

  constructor(private maquillageService: MaquillageService) { }

  ngOnInit(): void {
    this.chargerTypes();
  }

  chargerTypes() {
  this.maquillageService.listeTypes().subscribe(response => {
    this.types = response;
  });
}
  

  typeUpdated(type: TypeMaquillage) {
    const requete = this.ajout
      ? this.maquillageService.ajouterType(type)
      : this.maquillageService.modifierType(type);

    requete.subscribe({
      next: () => {
        this.chargerTypes();
        this.updatedType = { idtyp: null, nomtyp: '' };
        this.ajout = true;
      },
      
    });
  }

  updateType(type: TypeMaquillage) {
    this.updatedType = { ...type };
    this.ajout = false;
  }
}