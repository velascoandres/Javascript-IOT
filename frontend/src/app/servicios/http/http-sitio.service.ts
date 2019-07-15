import {HttpPrincipal} from "./http-principal";
import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {Router} from "@angular/router";
import {Sitio} from "../../dto/sitio";

@Injectable()
export class SitioHttpService extends HttpPrincipal<Sitio>{
  constructor(private readonly _httpClient:HttpClient,private readonly _router:Router){
    super(_httpClient, environment.url, '/Sitio');
  }
}
