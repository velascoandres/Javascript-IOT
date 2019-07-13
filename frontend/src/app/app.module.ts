import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RutaLoginComponent } from './rutas/ruta-login/ruta-login.component';
import { RutaRegistroComponent } from './rutas/ruta-registro/ruta-registro.component';
import { RutaInicioComponent } from './rutas/ruta-inicio/ruta-inicio.component';
import { RutaSitiosComponent } from './rutas/ruta-inicio/ruta-sitios/ruta-sitios.component';
import { RutaHabitacionComponent } from './rutas/ruta-inicio/ruta-sitios/ruta-habitacion/ruta-habitacion.component';
import { RutaLogHabitacionComponent } from './rutas/ruta-inicio/ruta-sitios/ruta-habitacion/ruta-log-habitacion/ruta-log-habitacion.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MatInputModule } from '@angular/material';
import {UsuarioHttpService} from "./servicios/http/http-usuario.service";


@NgModule({
  declarations: [
    AppComponent,
    RutaLoginComponent,
    RutaRegistroComponent,
    RutaInicioComponent,
    RutaSitiosComponent,
    RutaHabitacionComponent,
    RutaLogHabitacionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatGridListModule,
    MatIconModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule
  ],
  providers: [
    UsuarioHttpService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
