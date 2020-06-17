import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {MedicosComponent} from "./intermedio-unitarias/espias/medicos.component";
import {HttpClientModule} from '@angular/common/http';
import {MedicoComponent} from './basicas-integracion/medico-manual/medico.component';
import {HospitalComponent} from './basicas-integracion/hospital/hospital.component';
import {IncrementadorComponent} from "./basicas-integracion/incrementador/incrementador.component";
import {FormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";
import {rutas} from "./intermedio-integracion/rutas/app.routes";
import { NavbarComponent } from './intermedio-integracion/navbar/navbar.component';
import { RouterMedicoComponent } from './intermedio-integracion/router-medico/router-medico.component';

@NgModule({
  declarations: [
    AppComponent,
    MedicosComponent,
    MedicoComponent,
    HospitalComponent,
    IncrementadorComponent,
    NavbarComponent,
    RouterMedicoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(rutas)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
