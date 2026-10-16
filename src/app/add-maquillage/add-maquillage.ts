import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Maquillage } from '../model/maquillage.model';
import { MaquillageService } from '../maquillage.service';
import { TypeMaquillage } from '../model/type.model';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-add-maquillage',
  imports: [CommonModule,FormsModule],
  templateUrl: './add-maquillage.html',
  styleUrl: './add-maquillage.css'
})
export class AddMaquillage implements OnInit {

  newMaquillage = new Maquillage();
  message! : string;
  types! : TypeMaquillage[];
  newIdType! : number;
  newType! : TypeMaquillage;


  constructor(private maquillageService: MaquillageService,
              private router :Router
   ) {}



  ngOnInit() {
this.maquillageService.listeTypes().subscribe(ts => {
  this.types = ts._embedded.types;
});  }



  addMaquillage(){this.newType = this.maquillageService.consulterType(this.newIdType);
    this.newMaquillage.type = this.newType;
    this.maquillageService.ajouterMaquillage(this.newMaquillage);
    this.router.navigate(['maquillage']);

  }


}