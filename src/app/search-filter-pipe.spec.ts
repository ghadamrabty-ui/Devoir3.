import { SearchFilterPipe } from './search-filter.pipe';
import { Maquillage } from './model/maquillage.model';

describe('SearchFilterPipe', () => {
  let pipe: SearchFilterPipe;

  const produits = [
    { idmaquillage: 1, nommaquillage: 'Rouge à lèvres' },
    { idmaquillage: 2, nommaquillage: 'Fond de teint' },
    { idmaquillage: 3, nommaquillage: 'Mascara' },
  ] as Maquillage[];

  beforeEach(() => {
    pipe = new SearchFilterPipe();
  });

  it('crée une instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('renvoie la liste complète si le texte est vide', () => {
    expect(pipe.transform(produits, '')).toEqual(produits);
  });

  it('filtre sur le nom, sans tenir compte de la casse', () => {
    const resultat = pipe.transform(produits, 'ROUGE');
    expect(resultat.length).toBe(1);
    expect(resultat[0].nommaquillage).toBe('Rouge à lèvres');
  });

  it('renvoie un tableau vide si la liste est nulle', () => {
    expect(pipe.transform(null, 'a')).toEqual([]);
  });
});