import {HttpPrincipal} from "./http-principal";
import {Auth, Usuario} from "../../dto/usuario";
import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {map} from "rxjs/operators";
import {Router} from "@angular/router";
import {Observable} from "rxjs";

@Injectable()
export class AuthHttpService {
  url:string =  environment.url;
  usuario:Usuario;
  estaLogeado = false;
  constructor(private readonly _httpClient:HttpClient,
              private readonly _router:Router)
  {}

  login(auth:Auth):Observable<boolean>{
    const  url = `${this.url}/login`;

    return this._httpClient.post(url, auth).pipe(
      map(
        (datos:Respuesta)=>{
          if(datos){
            if(datos.error){
              this.estaLogeado = false;
              return false;
            }else {
              console.log(datos.usuario);
              this.estaLogeado = true;
              this.usuario = datos.usuario;
              const url = ['/inicio'];
              this._router.navigate(url);
              return true;
            }

          }
        }
      )
    );
  }
}

interface Respuesta {
  mensaje:string;
  error?:number;
  usuario?:Usuario;
}
