import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { Maquillage } from '../model/maquillage.model';
import { TypeMaquillage } from '../model/type.model';
import { MaquillageService } from '../services/maquillage.service';

@Component({
  selector: 'app-add-maquillage',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './add-maquillage.html',
  styleUrls: ['./add-maquillage.css']
})
export class AddMaquillageComponent implements OnInit {

  newMaquillage = new Maquillage();
  message = '';

  types: TypeMaquillage[] = [];
  newIdType: number | null = null;

  constructor(
    private maquillageService: MaquillageService,
    private router: Router
  ) {}

  ngOnInit(): void {
  this.maquillageService.getAllTypes().subscribe({
    next: (data) => {
      this.types = data;
    },
    error: (err) => console.error('Erreur chargement types', err)
  });
}

  addMaquillage(): void {

    const type = this.types.find(
      t => t.idtyp == this.newIdType
    );

    if (!type) {
      this.message = 'Veuillez choisir un type';
      return;
    }

    this.newMaquillage.type = type;

    this.maquillageService.ajouterMaquillage(this.newMaquillage)
      .subscribe({
        next: (maq) => {
          console.log(maq);
          this.router.navigate(['/maquillage']);
        },
        error: (err) => {
          console.error(err);
        }
      });
  }
}