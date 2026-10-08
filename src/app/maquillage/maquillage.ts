import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Maquillage } from '../maquillage.model';
import { MaquillageService } from '../maquillage.service';

@Component({
  selector: 'app-maquillage',
  imports: [RouterLink],
  templateUrl: './maquillage.html',
  styleUrl: './maquillage.css'
})
export class MaquillageComponent {

  maquillages: Maquillage[] = [];

  constructor(private maquillageService: MaquillageService) {
    this.maquillages = this.maquillageService.getMaquillages();
  }

  supprimerMaquillage(idMaquillage: number) {
    this.maquillageService.supprimerMaquillage(idMaquillage);
    this.maquillages = this.maquillageService.getMaquillages();
  }
}