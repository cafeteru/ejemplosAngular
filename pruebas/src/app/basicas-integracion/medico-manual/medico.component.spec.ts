import {ComponentFixture, TestBed} from "@angular/core/testing";
import {MedicoComponent} from "./medico.component";
import {MedicoService} from "./medico.service";
import {HttpClientModule} from "@angular/common/http";

describe('Pruebas del componente Angilar: MedicoComponent', () => {
  let component: MedicoComponent;
  let fixture: ComponentFixture<MedicoComponent>;

  beforeEach(() => {
    // Es un módulo pero solo colocamos lo necesario para las pruebas
    TestBed.configureTestingModule({
      declarations: [
        MedicoComponent,
      ],
      imports: [
        HttpClientModule
      ],
      providers: [
        MedicoService
      ]
    });

    // Da acceso a los elementos del componente
    fixture = TestBed.createComponent(MedicoComponent);
    // Crea el componente para usar en las pruebas
    component = fixture.componentInstance;
  })

  it('Debe de crearse el componente', () => {
    expect(component).toBeTruthy();
    expect(component).not.toBeNull();
  });

  it('Debe retornar el nombre del médico', () => {
    const nombre = 'Usuario';
    const mensaje = component.saludar(nombre);
    expect(mensaje).toContain(nombre);
    expect(mensaje).toContain(mensaje);
  });
});
