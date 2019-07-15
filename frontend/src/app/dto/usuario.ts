export  interface Usuario {
  id?:number,
  correo?:string,
  clave?:string,
  nombre?:string,
  apellido?:string,
  estado?:boolean,
  createdAt?: number,
  updatedAt?: number,
}

export interface Auth {
  correo:string,
  clave:string,
}


