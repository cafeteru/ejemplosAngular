import {obtenerRobots} from './arrays';

describe('Pruebas de arrays', () => {
  const res = obtenerRobots();
  it('Debe retornar al menos 3 robots', () => {
    expect(res.length).toBeGreaterThanOrEqual(3);
  });
  it('Debe contener Megaman', () => {
    expect(res).toContain('Megaman');
  });
})
