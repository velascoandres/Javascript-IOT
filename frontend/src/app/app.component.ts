import {Component, OnInit, ViewChild} from '@angular/core';
import {AuthHttpService} from "./servicios/http/http-auth.service";
import {MatSidenav} from "@angular/material";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'frontend';
  estaAbierto:boolean = false;




  cerrarMenu() {
    this.estaAbierto = false;
  }

  abrirMenu(){
    this.estaAbierto = true;
  }

  constructor(
    private readonly _authService:AuthHttpService,
  ){

  }

  estaLogeado(){
    return this._authService.estaLogeado;
  }

  obtenerNombreUsaurio(){
    return this._authService.usuario.nombre;
  }


  salir(){
    this._authService.logout();
  }

  ngOnInit(): void {
  }
}
