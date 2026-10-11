import { Injectable } from '@angular/core';
import { Maquillage } from './model/maquillage.model';
import { TypeMaquillage } from './model/type.model';
@Injectable({
  providedIn: 'root',
})
export class MaquillageService {
  maquillages: Maquillage[]; 
  maquillage!: Maquillage;
  types: TypeMaquillage[];

  constructor() {
    this.types = [
      { idType: 1, nomType: 'Fond de teint' },
      { idType: 2, nomType: 'Rouge à lèvres' },
      { idType: 3, nomType: 'Blush' },
      { idType: 4, nomType: 'Mascara' },
    ];

    this.maquillages = [
      {
        idMaquillage: 1,
        reference: 'LOR-TM-001',
        marque: "L'Oréal Paris",
        nomProduit: 'True Match Foundation',
        prix: 42.9,
        dateCreation: new Date('01/15/2025'),
        type: { idType: 1, nomType: 'Fond de teint' },
      },
      {
        idMaquillage: 2,
        reference: 'MAY-FM-002',
        marque: 'Maybelline',
        nomProduit: 'Fit Me Matte + Poreless',
        prix: 29.9,
        dateCreation: new Date('02/20/2025'),
        type: { idType: 1, nomType: 'Fond de teint' },
      },
      {
        idMaquillage: 3,
        reference: 'MAC-RW-003',
        marque: 'MAC Cosmetics',
        nomProduit: 'Retro Matte Ruby Woo',
        prix: 75,
        dateCreation: new Date('03/10/2025'),
        type: { idType: 2, nomType: 'Rouge à lèvres' },
      },
      {
        idMaquillage: 4,
        reference: 'NARS-ORG-004',
        marque: 'NARS',
        nomProduit: 'Powder Blush Orgasm',
        prix: 110,
        dateCreation: new Date('04/05/2025'),
        type: { idType: 3, nomType: 'Blush' },
      },
      {
        idMaquillage: 5,
        reference: 'MAY-LS-005',
        marque: 'Maybelline',
        nomProduit: 'Lash Sensational Mascara',
        prix: 34.9,
        dateCreation: new Date('05/12/2025'),
        type: { idType: 4, nomType: 'Mascara' },
      },
    ];
  }

  listeMaquillages(): Maquillage[] {
    return this.maquillages;
  }

  ajouterMaquillage(maq: Maquillage) {
    this.maquillages.push(maq);
  }

  supprimerMaquillage(maq: Maquillage) {
    const index = this.maquillages.indexOf(maq, 0);
    if (index > -1) {
      this.maquillages.splice(index, 1);
    }
  }

  consulterMaquillage(id: number): Maquillage {
    this.maquillage = this.maquillages.find((m) => m.idMaquillage == id)!;
    return this.maquillage;
  }

  trierMaquillages() {
    this.maquillages = this.maquillages.sort((n1, n2) => {
      if (n1.idMaquillage! > n2.idMaquillage!) {
        return 1;
      }
      if (n1.idMaquillage! < n2.idMaquillage!) {
        return -1;
      }
      return 0;
    });
  }

  updateMaquillage(m: Maquillage) {
    this.supprimerMaquillage(m);
    this.ajouterMaquillage(m);
    this.trierMaquillages();
  }

  listeTypes():TypeMaquillage[] {
    return this.types;
  }

  consulterType(id:number): TypeMaquillage{
    return this.types.find(t => t.idType == id)!;
  }

}