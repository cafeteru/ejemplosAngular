import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {MedicosComponent} from "./intermedio-unitarias/espias/medicos.component";
import {HttpClientModule} from '@angular/common/http';
import {MedicoComponent} from './basicas-integracion/medico-manual/medico.component';
import {HospitalComponent} from './basicas-integracion/hospital/hospital.component';
import {IncrementadorComponent} from "./basicas-integracion/incrementador/incrementador.component";
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    MedicosComponent,
    MedicoComponent,
    HospitalComponent,
    IncrementadorComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
