import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UpdateMaquillageComponent} from './modifier-maquillage';

describe('UpdateMaquillageComponent', () => {
  let component: UpdateMaquillageComponent;
  let fixture: ComponentFixture<UpdateMaquillageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdateMaquillageComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(UpdateMaquillageComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
