import {IncrementadorComponent} from "./incrementador.component";

describe('Incrementador Component Unit', () => {
  let component: IncrementadorComponent;
  beforeAll(() => component = new IncrementadorComponent());
  it('No debe de pasar de 100 el progreso', () => {
    component.progreso = 50;
    component.cambiarValor(500);
    expect(component.progreso).toBe(100);
  })
});
