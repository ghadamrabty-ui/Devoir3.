import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddMaquillage } from './add-maquillage';

describe('AddMaquillage', () => {
  let component: AddMaquillage;
  let fixture: ComponentFixture<AddMaquillage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddMaquillage],
    }).compileComponents();

    fixture = TestBed.createComponent(AddMaquillage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
