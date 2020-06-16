import {Jugador} from './clase';

describe('Pruebas de clase', () => {
  let jugador: Jugador;
  let hp: number;
  /**
   * Se ejecuta antes de todas las pruebas
   */
  beforeAll(() => {
    expect(jugador).toBeUndefined();
  });

  /**
   * Se ejecuta antes de cada prueba
   */
  beforeEach(() => {
    jugador = new Jugador();
    hp = jugador.hp;
  });

  /**
   * Se ejecuta después de todas las pruebas
   */
  afterAll(() => {
    expect(hp).toBeGreaterThan(jugador.hp);
  });

  /**
   * Se ejecuta después de cada prueba
   */
  afterEach(() => {
    expect(jugador).not.toBeUndefined();
  })

  it('Debe retornar 80 de hp, si recibe 20 de daño', () => {
    const resp = jugador.recibeDanio(20);
    expect(resp).toBe(80);
  });

  it('Debe retornar 50 de hp, si recibe 50 de daño', () => {
    const resp = jugador.recibeDanio(50);
    expect(resp).toBe(50);
  });

  it('Debe retornar 100 de hp, si recibe 0 de daño', () => {
    const resp = jugador.recibeDanio(100);
    expect(resp).toBe(0);
  });
})
