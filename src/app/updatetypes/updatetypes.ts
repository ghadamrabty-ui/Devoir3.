
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TypeMaquillage } from '../model/type.model';

@Component({
  selector: 'app-updatetype',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './updatetypes.html',
  styles: [],
})
export class UpdateType implements OnInit {

  @Input() type!: TypeMaquillage;
  @Input() ajout!: boolean;
  @Output() typeUpdated = new EventEmitter<TypeMaquillage>();

  ngOnInit(): void {
    console.log('ngOnInit du composant UpdateType ', this.type);
  }

  saveType() {
    this.typeUpdated.emit(this.type);
  }
}
