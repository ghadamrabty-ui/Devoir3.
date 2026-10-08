import { Component } from '@angular/core';
import { Maquillage } from '../maquillage.model';

@Component({
  selector: 'app-maquillage',
  imports: [],
  templateUrl: './maquillage.html',
  styleUrl: './maquillage.css'
})
export class MaquillageComponent {

  maquillages: Maquillage[] = [];

}