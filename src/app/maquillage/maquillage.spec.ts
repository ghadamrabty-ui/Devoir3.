import { Component } from '@angular/core';
import { Maquillage } from '../model/maquillage.model';

@Component({
  selector: 'app-maquillage',
  imports: [],
  templateUrl: './maquillage.html',
  styleUrl: './maquillage.css'
})
export class MaquillageComponent {

  maquillages: Maquillage[] = [];

}