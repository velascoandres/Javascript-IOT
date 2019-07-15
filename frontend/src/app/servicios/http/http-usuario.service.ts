import {HttpPrincipal} from "./http-principal";
import {Auth, Usuario} from "../../dto/usuario";
import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {map} from "rxjs/operators";
import {Router} from "@angular/router";

@Injectable()
export class UsuarioHttpService extends HttpPrincipal<Usuario>{
  estaLogeado = false;
  constructor(private readonly _httpClient:HttpClient,private readonly _router:Router){
    super(_httpClient, environment.url, '/Usuario');
  }

}
