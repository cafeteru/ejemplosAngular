import {ComponentFixture, TestBed} from '@angular/core/testing';
import {IncrementadorComponent} from './incrementador.component';
import {FormsModule} from '@angular/forms';
import {By} from "@angular/platform-browser";
import {DebugElement} from "@angular/core";

describe('Pruebas del IncremendatorComponent', () => {
  let component: IncrementadorComponent;
  let fixture: ComponentFixture<IncrementadorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IncrementadorComponent],
      imports: [FormsModule]
    });
    fixture = TestBed.createComponent(IncrementadorComponent);
    component = fixture.componentInstance;
  });

  it('Debe de mostrar la leyenda', () => {
    const leyenda = 'Progreso de carga';
    component.leyenda = leyenda;
    fixture.detectChanges(); // Dispara la detección de cambios
    const elem: HTMLElement = fixture.debugElement.query(
      // Selector estilo JQuery
      By.css('h3')
    ).nativeElement;

    expect(elem.innerHTML).toContain(leyenda);
  });

  it('Debe de mostrar en el input el valor del progreso', () => {
    // Selecciona el primer elemento que coincidan
    const input = fixture.debugElement.query(By.css('input'));
    expect(input).not.toBeNull();
    const elem = input.nativeElement;
    const valorOriginal = elem.value;
    component.cambiarValor(5);
    fixture.detectChanges();

    // Espera a que termine la detección de cambios
    fixture.whenStable().then(() => {
      expect(elem.value).toBe('55');
      expect(elem.value).not.toBe(valorOriginal);
    });
  });

  it('Debe de incrementar/decrementar en 5, con un click de botón', () => {
    // Coge todos los elementos que coincidan
    const botones: DebugElement[] =
      fixture.debugElement.queryAll(By.css('.btn-primary'))
    expect(botones.length).toBe(2);

    // Para hacer click en el botón con javascript puro
    botones[0].triggerEventHandler('click', null);
    expect(component.progreso).toBe(45);

    botones[1].triggerEventHandler('click', null);
    expect(component.progreso).toBe(50);
  });

  it('Comprobar cambios en el progreso', () => {
    const botones: DebugElement[] =
      fixture.debugElement.queryAll(By.css('.btn-primary'))
    expect(botones.length).toBe(2);
    botones[0].triggerEventHandler('click', null);
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      const elem: HTMLElement = fixture.debugElement.query(
        By.css('h3')).nativeElement;
      expect(elem.innerHTML).toContain('45');
    });
  });
});
