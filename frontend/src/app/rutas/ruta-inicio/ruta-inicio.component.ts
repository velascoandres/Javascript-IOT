import { Component, OnInit } from '@angular/core';
import {SitioHttpService} from "../../servicios/http/http-sitio.service";
import {Sitio} from "../../dto/sitio";

@Component({
  selector: 'app-ruta-inicio',
  templateUrl: './ruta-inicio.component.html',
  styleUrls: ['./ruta-inicio.component.css']
})
export class RutaInicioComponent implements OnInit {
  sitios:Sitio[]=[];
  nombreBusqueda:string;
  estaBuscando:boolean = false;
  constructor(
    private readonly _sitioService:SitioHttpService
  ) {

  }

  ngOnInit() {
    this.refrescarSitios();
  }
  //Refrescar tabla de sitios
  protected refrescarSitios(){
    this.estaBuscando = true;
    this._sitioService.listar().subscribe(
      (sitios)=>this.sitios=sitios,
      (error)=>console.log(error),
      ()=>this.estaBuscando=false,
    );
  }

  // Para buscar sitios
  buscarSitio(){
    this.estaBuscando = true;
    const filtro = {
      nombre:{
        contains:this.nombreBusqueda
      },
    };
    this._sitioService.buscarParametro(filtro)
      .subscribe(
        (productos)=>{
          this.sitios = productos;
          this.estaBuscando = false;
        },
      )
  }
}
