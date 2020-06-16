import {usuarioRegistrado} from "./booleanos";

describe('Pruebas de booleanos', () => {
  it('Debe de retornar true',
    () => {
      const res = usuarioRegistrado();
      expect(res).toBeTrue();
      expect(res).not.toBeFalse();
      expect(!res).toBeFalse();
    });
});
