import { Injectable } from '@angular/core';
import { Maquillage } from './maquillage.model';

@Injectable({
  providedIn: 'root'
})
export class MaquillageService {

  maquillages: Maquillage[] = [
    {
      idMaquillage: 1,
      reference: 'LOR-TM-001',
      marque: "L'Oréal Paris",
      nomProduit: 'True Match Foundation',
      categorie: 'Fond de teint',
      prix: 42.900,
      dateCreation: '2025-01-15'
    },
    {
      idMaquillage: 2,
      reference: 'MAY-FM-002',
      marque: 'Maybelline',
      nomProduit: 'Fit Me Matte + Poreless',
      categorie: 'Fond de teint',
      prix: 29.900,
      dateCreation: '2025-02-20'
    },
    {
      idMaquillage: 3,
      reference: 'MAC-RW-003',
      marque: 'MAC Cosmetics',
      nomProduit: 'Retro Matte Ruby Woo',
      categorie: 'Rouge à lèvres',
      prix: 75.000,
      dateCreation: '2025-03-10'
    },
    {
      idMaquillage: 4,
      reference: 'NARS-ORG-004',
      marque: 'NARS',
      nomProduit: 'Powder Blush Orgasm',
      categorie: 'Blush',
      prix: 110.000,
      dateCreation: '2025-04-05'
    },
    {
      idMaquillage: 5,
      reference: 'MAY-LS-005',
      marque: 'Maybelline',
      nomProduit: 'Lash Sensational Mascara',
      categorie: 'Mascara',
      prix: 34.900,
      dateCreation: '2025-05-12'
    }
  ];

  ajouterMaquillage(maquillage: Maquillage) {
    this.maquillages.push(maquillage);
  }

  getMaquillages(): Maquillage[] {
    return this.maquillages;
  }

  supprimerMaquillage(idMaquillage: number) {
    this.maquillages = this.maquillages.filter(
      m => m.idMaquillage !== idMaquillage
    );
  }

  getMaquillage(idMaquillage: number): Maquillage | undefined {
    return this.maquillages.find(
      m => m.idMaquillage === idMaquillage
    );
  }

  modifierMaquillage(maquillageModifie: Maquillage) {
    const index = this.maquillages.findIndex(
      m => m.idMaquillage === maquillageModifie.idMaquillage
    );

    if (index !== -1) {
      this.maquillages[index] = maquillageModifie;
    }
  }
}