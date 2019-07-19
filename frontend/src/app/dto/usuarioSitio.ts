import {Usuario} from "./usuario";
import {Sitio} from "./sitio";

export interface UsuarioSitio {
  id?:number,
  fkUsuario:number | Usuario | any,
  fkSitio:number | Sitio | any,
  esAdminSitio?:boolean,
}
