import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RutaLoginComponent} from "./rutas/ruta-login/ruta-login.component";
import {RutaRegistroComponent} from "./rutas/ruta-registro/ruta-registro.component";
import {RutaInicioComponent} from "./rutas/ruta-inicio/ruta-inicio.component";
import {RutaSitiosComponent} from "./rutas/ruta-inicio/ruta-sitios/ruta-sitios.component";
import {RutaLogHabitacionComponent} from "./rutas/ruta-inicio/ruta-sitios/ruta-habitacion/ruta-log-habitacion/ruta-log-habitacion.component";
import {RutaHabitacionComponent} from "./rutas/ruta-inicio/ruta-sitios/ruta-habitacion/ruta-habitacion.component";

const routes: Routes = [
  {
    path:'login',
    component: RutaLoginComponent
  },
  {
    path:'registro',
    component: RutaRegistroComponent
  },
  {
    path:'inicio',
    component: RutaInicioComponent
  },
  {
    path:'sitio/:idSitio',
    component: RutaSitiosComponent
  },
  {
    path:'sitio/habitacion/:idHabitacion',
    component: RutaHabitacionComponent
  },
  {
    path:'sitio/habitacion/:idHabitacion/logHabitacion',
    component: RutaLogHabitacionComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
