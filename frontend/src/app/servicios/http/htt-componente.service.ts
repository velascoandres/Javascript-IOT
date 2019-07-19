import {HttpPrincipal} from "./http-principal";
import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {Router} from "@angular/router";
import {Componente} from "../../dto/componente";

@Injectable()
export class ComponenteHttpService extends HttpPrincipal<Componente>{
  constructor(private readonly _httpClient:HttpClient,private readonly _router:Router){
    super(_httpClient, environment.url, '/Componente');
  }
}
