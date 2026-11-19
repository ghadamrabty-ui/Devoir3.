
import { Routes } from '@angular/router';
import { MaquillageComponent } from './maquillage/maquillage';
import { AddMaquillageComponent  } from './add-maquillage/add-maquillage';
import { UpdateMaquillageComponent  } from './modifier-maquillage/modifier-maquillage';
import { RecherchePartype } from './recherche-partype/recherche-partype';
import { RechercheParNomComponent } from './recherche-par-nom/recherche-par-nom';
import { LoginComponent } from './login/login';
import { ForbiddenComponent } from './forbidden/forbidden';
import { produitGuard } from './produit-guard';
import { ListeTypes } from './liste-types/liste-types';

export const routes: Routes = [
  { path: 'maquillage', component: MaquillageComponent },
  { path: 'add-maquillage', component: AddMaquillageComponent, canActivate: [produitGuard] },
  { path: 'modifier-maquillage/:id', component: UpdateMaquillageComponent },
  { path: 'rechercheParNom', component: RechercheParNomComponent },
  { path: 'recherchePartype', component: RecherchePartype },
  { path: 'login', component: LoginComponent },
  { path: 'app-forbidden', component: ForbiddenComponent },
  { path: "listeTypes", component: ListeTypes },
  { path: '', redirectTo: 'maquillage', pathMatch: 'full' },
];
