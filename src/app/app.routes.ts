import { Routes } from '@angular/router';
import { MaquillageComponent } from './maquillage/maquillage';
import { AddMaquillage } from './add-maquillage/add-maquillage';
import { ModifierMaquillage } from './modifier-maquillage/modifier-maquillage';

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
    path: '',
    redirectTo: 'maquillage',
    pathMatch: 'full'
  }
];