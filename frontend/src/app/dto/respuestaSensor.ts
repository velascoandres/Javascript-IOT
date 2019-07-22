import {Componente} from "./componente";

export interface RespuestaSensor {
  "mensaje": string,
  "estado": boolean,
  "componente"?: Componente
}
