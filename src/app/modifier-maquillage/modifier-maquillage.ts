import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { Maquillage } from '../model/maquillage.model';
import { TypeMaquillage } from '../model/type.model';
import { MaquillageService } from '../services/maquillage.service';

@Component({
  selector: 'app-modifier-maquillage',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterLink],
  templateUrl: './modifier-maquillage.html'
})
export class UpdateMaquillageComponent implements OnInit {

  currentMaquillage = new Maquillage();

  types: TypeMaquillage[] = [];
  modifiedTypeId: number | null = null;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private maquillageService: MaquillageService
  ) {}

  ngOnInit(): void {

    this.maquillageService.listeTypes().subscribe({
      next: (types) => {
        this.types = types;
        console.log('Types =', this.types);
      },
      error: (err) => {
        console.error(err);
      }
    });

    const id = this.activatedRoute.snapshot.params['id'];

    this.maquillageService.consulterMaquillage(id).subscribe({
      next: (maq) => {
        this.currentMaquillage = maq;
        this.modifiedTypeId = maq.type?.idtyp ?? null;
      },
      error: (err) => {
        console.error(err);
      }
    });
  }

  updateMaquillage(): void {

    const typeSelectionne =
      this.types.find(t => t.idtyp == this.modifiedTypeId);

    if (typeSelectionne) {
      this.currentMaquillage.type = typeSelectionne;
    }

    this.maquillageService.updateMaquillage(this.currentMaquillage)
      .subscribe({
        next: () => {
          this.router.navigate(['/maquillage']);
        },
        error: (err) => {
          console.error(err);
        }
      });
  }
}