import { CommonModule } from '@angular/common';
import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Maquillage } from '../model/maquillage.model';
import { MaquillageService } from '../services/maquillage.service';
import { RouterLink } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-maquillage',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './maquillage.html',
  styleUrl: './maquillage.css'
})
export class MaquillageComponent implements OnInit {

  maquillages: Maquillage[] = [];

  constructor(
    private maquillageService: MaquillageService,
    public authService: AuthService,
    private cd: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.chargerMaquillages();
  }

  chargerMaquillages(): void {

    this.maquillageService.listeMaquillages().subscribe({
      next: (maqs) => {
        console.log('DONNEES RECUES = ', maqs);
        this.maquillages = maqs;
        this.cd.detectChanges();
      },

      error: (err) => {
        console.error('Erreur chargement des maquillages :', err);
      }
    });

  }

  supprimerMaquillage(m: Maquillage): void {

    if (confirm('Etes-vous sûr ?')) {

      this.maquillageService
        .supprimerMaquillage(m.idmaquillage)
        .subscribe({
          next: () => this.chargerMaquillages(),

          error: (err) => {
            console.error('Erreur suppression :', err);
          }
        });

    }
  }
}