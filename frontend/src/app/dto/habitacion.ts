import {Usuario} from "./usuario";
import {Componente} from "./componente";

export interface Habitacion {
  id?:number,
  capacidad:number,
  area?:number,
  fkSito:number,
  componentes?:Componente[],
  usuarios?:Usuario[],
}
