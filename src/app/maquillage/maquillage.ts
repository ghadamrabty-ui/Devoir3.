import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Maquillage } from '../model/maquillage.model';
import { MaquillageService } from '../services/maquillage.service';
import { RouterLink } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-maquillage',
  imports: [CommonModule,RouterLink],
  templateUrl: './maquillage.html',
  styleUrl: './maquillage.css'
})
export class MaquillageComponent implements OnInit  {
  maquillages! : Maquillage[]; //un tableau de Maquillage
  constructor(private maquillageService: MaquillageService, 
              public authService: AuthService
  ) {
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