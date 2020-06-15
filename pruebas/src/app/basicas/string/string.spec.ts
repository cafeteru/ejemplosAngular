import {mensaje} from './string';

describe('Pruebas de strings', () => {
  it('Debe de regresa un string', () => {
    const respuesta = mensaje('Iván');
    // Son lo mismo
    expect(typeof respuesta === 'string');
    expect(typeof respuesta).toBe('string');
  });

  it('Debe de retornar un saludo con el nombre enviado',
    () => {
      const nombre = 'Iván';
      const respuesta = mensaje(nombre);
      expect(respuesta).toBe('Saludos ' + nombre);
      expect(respuesta).toContain(nombre);
    });
});



