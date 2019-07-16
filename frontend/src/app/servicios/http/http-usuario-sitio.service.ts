import {HttpPrincipal} from "./http-principal";
import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {Router} from "@angular/router";
import {UsuarioSitio} from "../../dto/usuarioSitio";

@Injectable()
export class UsuarioSitioHttpService extends HttpPrincipal<UsuarioSitio>{
  constructor(private readonly _httpClient:HttpClient,private readonly _router:Router){
    super(_httpClient, environment.url, '/UsuarioSitio');
  }
}
