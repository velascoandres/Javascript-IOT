import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import { Observable } from 'rxjs';
import {UsuarioHttpService} from "../http/http-usuario.service";

@Injectable({
  providedIn: 'root'
})
export class EstaLogeadoGuard implements  CanActivate{
  constructor(private readonly _usuarioService:UsuarioHttpService,  private readonly _router:Router){}
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):boolean {
    // Llamar al servicio de login

    if(this._usuarioService.estaLogeado){
      //alert('Tienes permisos');
      return true
    }else {
      alert('No Tienes permisos');
      const url = ['/login'];
      this._router.navigate(url);
      return false;
    }
  }
}
