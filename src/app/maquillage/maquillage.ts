import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Maquillage } from '../model/maquillage.model';
import { MaquillageService } from '../maquillage.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-maquillage',
  imports: [CommonModule,RouterLink],
  templateUrl: './maquillage.html',
  styleUrl: './maquillage.css'
})
export class MaquillageComponent implements OnInit  {
  maquillages! : Maquillage[]; //un tableau de Maquillage
  constructor(private maquillageService: MaquillageService ) {
maquillageService.listeMaquillages().subscribe(maqs => {
  this.maquillages = maqs;
});   }

   ngOnInit() {

     }

     supprimerMaquillage(m: Maquillage)
   {
    let conf = confirm("Etes-vous sûr ?");
     if (conf)
       this.maquillageService.supprimerMaquillage(m);
   }

}