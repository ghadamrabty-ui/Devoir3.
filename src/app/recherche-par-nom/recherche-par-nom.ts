import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Maquillage } from '../model/maquillage.model';
import { MaquillageService } from '../services/maquillage.service';
import { SearchFilterPipe } from '../search-filter.pipe';

@Component({
  selector: 'app-recherche-par-nom',
  standalone: true,
  imports: [FormsModule, CommonModule, SearchFilterPipe],
  templateUrl: './recherche-par-nom.html',
  styles: []
})
export class RechercheParNomComponent implements OnInit {

  maquillages: Maquillage[] = [];
  searchTerm = '';

  constructor(private maquillageService: MaquillageService) {}

  ngOnInit(): void {
    this.maquillageService.listeMaquillages().subscribe({
      next: maquillages => this.maquillages = maquillages,
      error: err => console.error('Erreur chargement :', err)
    });
  }
}