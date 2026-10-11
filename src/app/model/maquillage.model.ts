import { TypeMaquillage } from "./type.model";

export class Maquillage {
    idMaquillage! : number;
    reference! : string;
    marque! : string;
    nomProduit! : string;
    prix! : number;
    dateCreation! : Date ;
    type! : TypeMaquillage;
}