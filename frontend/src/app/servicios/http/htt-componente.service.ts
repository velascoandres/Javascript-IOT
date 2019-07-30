import {HttpPrincipal} from "./http-principal";
import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {Router} from "@angular/router";
import {Componente} from "../../dto/componente";
import {map} from "rxjs/operators";
import {Observable} from "rxjs";
import {RespuestaSensor} from "../../dto/respuestaSensor";

@Injectable()
export class ComponenteHttpService extends HttpPrincipal<Componente>{
  constructor(private readonly _httpClient:HttpClient,private readonly _router:Router){
    super(_httpClient, environment.url, '/Componente');
  }
  accionar(id:number):Observable<RespuestaSensor>{
    const  url = `${this.url}${this.modelo}/accionarComponente/${id}`;
    return this.httpclient.get(url).pipe(
      map(
        (datos)=>{
          return datos as RespuestaSensor;
        }
      )
    );
  }


  apagar(id:number):Observable<RespuestaSensor>{
    const  url = `${this.url}${this.modelo}/apagarComponente/${id}`;
    return this.httpclient.get(url).pipe(
      map(
        (datos)=>{
          return datos as RespuestaSensor;
        }
      )
    );
  }




}
