import {Usuario} from "./usuario";
import {Habitacion} from "./habitacion";

export interface UsuarioHabitacion {
  id?:number,
  fkUsuario:number | Usuario | any,
  fkHabitacion:number | Habitacion | any,
  esAdminSitio?:boolean,
}
