import {Routes} from "@angular/router";
import {HospitalComponent} from "../../basicas-integracion/hospital/hospital.component";
import {MedicoComponent} from "../../basicas-integracion/medico-manual/medico.component";
import {IncrementadorComponent} from "../../basicas-integracion/incrementador/incrementador.component";

export const rutas: Routes = [
  {path: 'hospital', component: HospitalComponent},
  {path: 'medico/:id', component: MedicoComponent},
  {path: '**', component: IncrementadorComponent}
];
