import { Routes } from '@angular/router';
import { MaquillageComponent } from './maquillage/maquillage';
import { AddMaquillage } from './add-maquillage/add-maquillage';
import { ModifierMaquillage } from './modifier-maquillage/modifier-maquillage';
import { RecherchePartype } from './recherche-partype/recherche-partype';
import { RechercheParNomComponent } from './recherche-par-nom/recherche-par-nom';


export const routes: Routes = [
  {
    path: 'maquillage',
    component: MaquillageComponent
  },
  {
    path: 'add-maquillage',
    component: AddMaquillage
  },
  {
    path: 'modifier-maquillage/:id',
    component: ModifierMaquillage
  },
  {
    path: "rechercheParNom", component : RechercheParNomComponent
  },
  {
    path: "recherchePartype", component : RecherchePartype
  },
  {
    path: '',
    redirectTo: 'maquillage',
    pathMatch: 'full'
  },

];