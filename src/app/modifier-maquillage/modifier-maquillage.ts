import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Maquillage } from '../maquillage.model';
import { MaquillageService } from '../maquillage.service';

@Component({
  selector: 'app-modifier-maquillage',
  imports: [FormsModule, RouterLink],
  templateUrl: './modifier-maquillage.html',
  styleUrl: './modifier-maquillage.css'
})
export class ModifierMaquillage implements OnInit {

  maquillage!: Maquillage;

  constructor(
    private route: ActivatedRoute,
    private maquillageService: MaquillageService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    const maquillageTrouve =
      this.maquillageService.getMaquillage(id);

    if (maquillageTrouve) {
      this.maquillage = { ...maquillageTrouve };
    }
  }

  modifierMaquillage() {
    this.maquillageService.modifierMaquillage(this.maquillage);
    this.router.navigate(['/maquillage']);
  }
}