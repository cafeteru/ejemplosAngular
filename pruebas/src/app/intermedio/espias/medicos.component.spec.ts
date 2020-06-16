import {MedicosComponent} from './medicos.component';
import {MedicosService} from "./medicos.service";
import {from, throwError} from "rxjs";

describe('Pruebas de MedicoComponent', () => {
  let medicosComponent: MedicosComponent;
  const medicosService = new MedicosService(null);

  beforeEach(() => {
    medicosComponent = new MedicosComponent(medicosService)
  });

  it('Init: Debe de cargar los médicos', () => {
    // Crea el mock del servicio
    const medicos = ['medico1', 'medico2', 'medico3'];
    spyOn(medicosService, 'getMedicos').and.returnValue(from([medicos]));

    medicosComponent.ngOnInit();
    expect(medicosComponent.medicos.length).toBeGreaterThan(0);
    expect(medicosComponent.medicos.length).toBe(medicos.length);
    expect(medicosComponent.medicos).toBe(medicos);
  });

  it('Debe de llamar al servidor para agregar un médico', () => {
    const espia = spyOn(medicosService, 'agregarMedico').and.returnValue(
      from([]));

    medicosComponent.agregarMedico();
    // Comprueba que se ha realizado la llamada al método
    expect(espia).toHaveBeenCalled();
  });

  it('Debe de añadir un médico', () => {
    const medico = {id: 1, nombre: 'Juan'}
    spyOn(medicosService, 'agregarMedico').and.returnValues(from([medico]));

    medicosComponent.agregarMedico();
    expect(medicosComponent.medicos.length).toBe(1);
    expect(medicosComponent.medicos[0]).toBe(medico);
  });

  it('Si falla al añadir, la propiedad mensajeError debe ser igual al error' +
    ' del servicio', () => {
    const miError = 'No se pudo agregar al médico';
    spyOn(medicosService, 'agregarMedico').and.returnValue(throwError(miError));

    medicosComponent.agregarMedico();
    expect(medicosComponent.mensajeError).toBe(miError);
  });

  it('Debe de llamar al servidor para borrar un médico', () => {
    spyOn(window, 'confirm').and.returnValue(true);
    const espia = spyOn(medicosService, 'borrarMedico').and.returnValue(
      from([]));
    medicosComponent.borrarMedico('1');
    expect(espia).toHaveBeenCalledWith('1');
  });

  it('No debe de llamar al servidor para borrar un médico', () => {
    spyOn(window, 'confirm').and.returnValue(false);
    const espia = spyOn(medicosService, 'borrarMedico').and.returnValue(
      from([]));
    medicosComponent.borrarMedico('1');
    expect(espia).not.toHaveBeenCalledWith('1');
  });
});
