import {Sitio} from "./sitio";
import {Habitacion} from "./habitacion";
import {Rol} from "./rol";

export  interface Usuario {
  id?:number,
  correo?:string,
  clave?:string,
  nombre?:string,
  apellido?:string,
  estado?:boolean,
  createdAt?: number,
  updatedAt?: number,
  sitios?:Sitio[],
  roles?:Rol[],
  habitaciones?:Habitacion[],
}

export interface Auth {
  correo:string,
  clave:string,
}


