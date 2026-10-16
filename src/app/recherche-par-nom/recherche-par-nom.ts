import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Maquillage } from '../model/maquillage.model';
import { MaquillageService } from '../maquillage.service';
import { searchFilterPipe } from '../search-filter.pipe';



@Component({
  selector: 'app-recherche-par-nom',
  imports: [FormsModule,CommonModule,searchFilterPipe],
  templateUrl: './recherche-par-nom.html',
  styles: ``
})
export class RechercheParNomComponent implements OnInit {

  nomProduit! :string;
  maquillages! : Maquillage[];
  allMaquillages! : Maquillage[];
    searchTerm! : string;


  constructor(private maquillageService:MaquillageService ){}


  ngOnInit(): void {
      this.maquillageService.listeMaquillages().subscribe(maquillages => {
          console.log(maquillages);
          this.maquillages = maquillages;

});
   //this.maquillages=[];

  }

  rechercherProds()
  {
    
     if (this.nomProduit)
      
      this.maquillageService.rechercherParNom(this.nomProduit).subscribe(maquillages => {
        console.log(maquillages);
        this.maquillages = maquillages;
      });
    }

  onKeyUp(filterText : String){
          this.maquillages = this.allMaquillages.filter(item =>
              item.nomProduit.toLowerCase().includes(filterText.toLowerCase()));
      }
  }



