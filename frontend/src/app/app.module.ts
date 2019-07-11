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
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
