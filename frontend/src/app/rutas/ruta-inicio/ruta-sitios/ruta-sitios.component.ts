import { Component, OnInit } from '@angular/core';
import {Habitacion} from "../../../dto/habitacion";
import {HabitacionHttpService} from "../../../servicios/http/htt-habitacion.service";
import {ActivatedRoute} from "@angular/router";
import {SitioHttpService} from "../../../servicios/http/http-sitio.service";
import {Sitio} from "../../../dto/sitio";

@Component({
  selector: 'app-ruta-sitios',
  templateUrl: './ruta-sitios.component.html',
  styleUrls: ['./ruta-sitios.component.css']
})
export class RutaSitiosComponent implements OnInit {

  habitaciones:Habitacion[]=[];
  protected idSitio:number=0;
  nombreBusqueda:string='';
  sitio:Sitio={nombre:'',direccion:'',area:0};
  constructor(
    private readonly _habitacionService:HabitacionHttpService,
    private readonly _sitioService:SitioHttpService,
    private readonly _activateRoute:ActivatedRoute
  ) { }

  buscarSitio(idSitio:number){
    this._sitioService.buscar(idSitio).subscribe(
      (sitio)=>this.sitio=sitio,
      (error)=>console.log(error),
    )
  }
  ngOnInit() {
    const parametros$ = this._activateRoute.params;
    parametros$.subscribe( // Estamos suscritos a esos cambios
      (parametros)=>{ // Ok TRY
        console.log('Parametros: ', parametros); //Para los parametros de ruta
        this.idSitio = +parametros.idSitio;
        this.buscarSitio(this.idSitio);
        this.refrescarHabitaciones(this.idSitio);
      },(error)=>{ // :( CATCH
        console.log('Error: ', error);
      },
      ()=>{ // Completado FINALLY -> OPCIONAL
        console.log('completo');
      }
    );

  }

  refrescarHabitaciones(idSitio:number){
    this._habitacionService.buscarParametro({fkSitio:idSitio}).subscribe(
      (habitaciones)=>this.habitaciones=habitaciones,
      (error)=>console.log(error)
    )
  }

  buscarHabitacion(){
    const filtro = {
      nombre:{contains:this.nombreBusqueda},
      fkSitio:this.idSitio,
    };
    this._habitacionService.buscarParametro(filtro)
      .subscribe(
        (habitaciones)=>{
          this.habitaciones = habitaciones;
        },
      )
  }
}
