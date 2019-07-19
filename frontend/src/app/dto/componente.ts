import {LogComponente} from "./log";

export interface Componente {
  id?:number,
  nombre:string,
  codigoSensorAsociado:string,
  fkHabitacion: number,
  estado?:boolean,
  logs?:LogComponente[]
}
