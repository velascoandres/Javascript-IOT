import {Sitio} from "./sitio";
import {Habitacion} from "./habitacion";
import {Rol} from "./rol";
import {UsuarioSitio} from "./usuarioSitio";

export  interface Usuario {
  id?:number,
  correo?:string,
  clave?:string,
  nombre?:string,
  apellido?:string,
  estado?:boolean,
  createdAt?: number,
  updatedAt?: number,
  sitios?:UsuarioSitio[],
  roles?:Rol[],
  habitaciones?:any[],
}

export interface Auth {
  correo:string,
  clave:string,
}


