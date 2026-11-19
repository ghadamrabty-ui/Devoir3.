import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { AddMaquillageComponent } from './add-maquillage';

describe('AddMaquillageComponent', () => {
  let component: AddMaquillageComponent;
  let fixture: ComponentFixture<AddMaquillageComponent>;
  let httpMock: HttpTestingController;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddMaquillageComponent],
      providers: [
        provideRouter([]),
        provideHttpClient(),
        provideHttpClientTesting(),
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(AddMaquillageComponent);
    component = fixture.componentInstance;
    httpMock = TestBed.inject(HttpTestingController);
    fixture.detectChanges(); // déclenche ngOnInit (appel listeTypes)
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should create', () => {
    // On répond à la requête GET des types pour éviter une requête en attente
    const req = httpMock.expectOne('http://localhost:8080/maquillage/api/typ');
    req.flush({ _embedded: { types: [] } });

    expect(component).toBeTruthy();
  });
});