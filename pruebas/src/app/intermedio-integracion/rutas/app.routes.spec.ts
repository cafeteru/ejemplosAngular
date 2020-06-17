import {rutas} from './app.routes';
import {MedicoComponent} from "../../basicas-integracion/medico-manual/medico.component";

describe('Pruebas de rutas', () => {
  it('Debe existir la ruta /medico/:id', () => {
    expect(rutas).toContain({path: 'medico/:id', component: MedicoComponent});
  });
});
