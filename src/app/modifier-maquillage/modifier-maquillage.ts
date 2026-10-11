import { Component, OnInit } from '@angular/core';
import { Maquillage } from '../model/maquillage.model';
import { ActivatedRoute, Router } from '@angular/router';
import { MaquillageService } from '../maquillage.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TypeMaquillage } from '../model/type.model';

@Component({
  selector: 'app-modifier-maquillage',
  imports: [FormsModule,CommonModule],
  templateUrl: './modifier-maquillage.html',
  styleUrl: './modifier-maquillage.css'
})
export class ModifierMaquillage implements OnInit {
  currentMaquillage  = new Maquillage();

  types! : TypeMaquillage[];
 updatedTypeId! : number;


  constructor(private activatedRoute: ActivatedRoute,
              private router :Router,
              private maquillageService: MaquillageService
) { }

ngOnInit(): void {
  this.types = this.maquillageService.listeTypes();
  this.currentMaquillage = this.maquillageService.consulterMaquillage(this.activatedRoute.snapshot.params['id']);
  this.updatedTypeId=this.currentMaquillage.type.idType;
}




updateMaquillage() {
  this.currentMaquillage.type=this.maquillageService.consulterType(this.updatedTypeId);
     this.maquillageService.updateMaquillage(this.currentMaquillage);
     this.router.navigate(['maquillage']);
   }


}