import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { Maquillage } from '../maquillage.model';
import { MaquillageService } from '../maquillage.service';

@Component({
  selector: 'app-add-maquillage',
  imports: [FormsModule, RouterLink],
  templateUrl: './add-maquillage.html',
  styleUrl: './add-maquillage.css'
})
export class AddMaquillage {

  maquillage: Maquillage = {
    idMaquillage: 0,
    reference: '',
    marque: '',
    nomProduit: '',
    categorie: '',
    prix: 0,
    dateCreation: ''
  };

  constructor(
    private maquillageService: MaquillageService,
    private router: Router
  ) {}

  ajouterMaquillage() {
    this.maquillageService.ajouterMaquillage(this.maquillage);
    this.router.navigate(['/maquillage']);
  }
}