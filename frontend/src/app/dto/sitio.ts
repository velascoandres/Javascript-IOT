import {UsuarioSitio} from "./usuarioSitio";

export interface Sitio {
  id?:number,
  nombre:string,
  direccion:string,
  area:number,
  usuarios?:UsuarioSitio[],
}
