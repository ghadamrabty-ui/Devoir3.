import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';

import { Maquillage } from '../model/maquillage.model';
import { TypeMaquillage } from '../model/type.model';
import { TypeWrapper } from '../model/type.wrapper';

@Injectable({
  providedIn: 'root'
})
export class MaquillageService {

  maquillages: Maquillage[] = [];
  types: TypeMaquillage[] = [];

  private readonly apiURL = 'http://localhost:8080/maquillage/api';
  private readonly apiURLTyp = 'http://localhost:8080/maquillage/api/typ';

  constructor(private http: HttpClient) {}


  listeMaquillages(): Observable<Maquillage[]> {
    return this.http.get<Maquillage[]>(this.apiURL).pipe(
      tap(maqs => this.maquillages = maqs)
    );
  }

  consulterMaquillage(id: number): Observable<Maquillage> {
    return this.http.get<Maquillage>(`${this.apiURL}/${id}`);
  }

  ajouterMaquillage(maq: Maquillage): Observable<Maquillage> {
    return this.http.post<Maquillage>(this.apiURL, maq);
  }

 updateMaquillage(maq: Maquillage): Observable<Maquillage> {
  return this.http.put<Maquillage>(
    this.apiURL,
    maq
  );
}


  supprimerMaquillage(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiURL}/${id}`);
  }

listeTypes(): Observable<TypeMaquillage[]> {
  return this.http.get<TypeMaquillage[]>(this.apiURLTyp);
}

  consulterType(id: number): TypeMaquillage | undefined {
    return this.types.find(t => t.idtyp == id);
  }

  ajouterType(type: TypeMaquillage): Observable<TypeMaquillage> {
  return this.http.post<TypeMaquillage>(
    this.apiURLTyp,
    {
      nomtyp: type.nomtyp
    }
  );
}

  modifierType(type: TypeMaquillage): Observable<TypeMaquillage> {
    return this.http.put<TypeMaquillage>(`${this.apiURLTyp}/${type.idtyp}`, type);
  }

  supprimerType(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiURLTyp}/${id}`);
  }
  getAllTypes(): Observable<TypeMaquillage[]> {
  return this.http.get<TypeMaquillage[]>('http://localhost:8080/maquillage/api/typ');
}
}