import {Formulario} from "./formulario";
import {FormBuilder} from "@angular/forms";

describe('Formularios', () => {
  let formulario: Formulario;

  beforeEach(() => {
    formulario = new Formulario(new FormBuilder());
  })

  it('Debe de crear un formulario con dos campos', function () {
    expect(formulario.form.contains('email')).toBeTrue();
    expect(formulario.form.contains('password')).toBeTrue();
    expect(formulario.form.contains('password2')).toBeFalse();
  });

  it('El email debe ser obligatorio', () => {
    const control = formulario.form.get('email');
    control.setValue('');
    expect(control.valid).toBeFalse();
    control.setValue('email@');
    expect(control.valid).toBeFalse();
    control.setValue('email@gmail');
    expect(control.valid).toBeTrue();
    control.setValue('email@gmail.es');
    expect(control.valid).toBeTrue();
  });
});
