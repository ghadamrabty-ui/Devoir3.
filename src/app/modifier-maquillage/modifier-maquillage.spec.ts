import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ModifierMaquillage } from './modifier-maquillage';

describe('ModifierMaquillage', () => {
  let component: ModifierMaquillage;
  let fixture: ComponentFixture<ModifierMaquillage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModifierMaquillage],
    }).compileComponents();

    fixture = TestBed.createComponent(ModifierMaquillage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
