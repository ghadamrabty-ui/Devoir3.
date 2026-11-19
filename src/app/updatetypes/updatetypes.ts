import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TypeMaquillage } from '../model/type.model';

@Component({
  selector: 'app-updatetype',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './updatetypes.html',
  styles: []
})
export class UpdateType {

  @Input() type!: TypeMaquillage;
  @Input() ajout!: boolean;
  @Output() typeUpdated = new EventEmitter<TypeMaquillage>();

  saveType(): void {

  console.log("TYPE ENVOYE =", this.type);
  console.log("NOM =", this.type.nomtyp);

  this.typeUpdated.emit(this.type);
}
}