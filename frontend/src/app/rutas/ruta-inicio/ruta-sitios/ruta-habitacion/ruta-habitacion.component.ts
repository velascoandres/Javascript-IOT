import { Component, OnInit } from '@angular/core';
import {Habitacion} from "../../../../dto/habitacion";
import {Usuario} from "../../../../dto/usuario";
import {HabitacionHttpService} from "../../../../servicios/http/htt-habitacion.service";
import {ActivatedRoute} from "@angular/router";
import {Componente} from "../../../../dto/componente";
import {ComponenteHttpService} from "../../../../servicios/http/htt-componente.service";

@Component({
  selector: 'app-ruta-habitacion',
  templateUrl: './ruta-habitacion.component.html',
  styleUrls: ['./ruta-habitacion.component.css']
})
export class RutaHabitacionComponent implements OnInit {

  componentes:Componente[]=[];
  protected idHabitacion:number=0;
  nombreBusqueda:string='';
  habitacion:Habitacion={nombre:'',capacidad:0,area:0,fkSito:0};
  usuarios:Usuario[]=[];

  constructor(
    private readonly _componenteService:ComponenteHttpService,
    private readonly _habitacionService:HabitacionHttpService,
    private readonly  _activateRoute:ActivatedRoute
  ) { }

  buscarHabitacion(idHabitacion:number){
    this._habitacionService.buscar(idHabitacion).subscribe(
      (sitio)=>this.habitacion=sitio,
      (error)=>console.log(error),
    )
  }
  ngOnInit() {
    const parametros$ = this._activateRoute.params;
    parametros$.subscribe( // Estamos suscritos a esos cambios
      (parametros)=>{ // Ok TRY
        console.log('Parametros: ', parametros); //Para los parametros de ruta
        this.idHabitacion = +parametros.idHabitacion;
        this.buscarHabitacion(this.idHabitacion);
        this.refrescarComponentes(this.idHabitacion);
      },(error)=>{ // :( CATCH
        console.log('Error: ', error);
      },
      ()=>{ // Completado FINALLY -> OPCIONAL
        console.log('completo');
      }
    );

  }

  refrescarComponentes(idHabitacion:number){
    this._componenteService.buscarParametro({fkHabitacion:idHabitacion}).subscribe(
      (componentes)=>{
        console.log("Estos son:", componentes);
        this.componentes=componentes;
      },
      (error)=>console.log(error)
    )
  }

  buscarComponente(){
    const filtro = {
      nombre:{contains:this.nombreBusqueda},
      fkHabitacion:this.idHabitacion,
    };
    this._componenteService.buscarParametro(filtro)
      .subscribe(
        (componentes)=>{
          this.componentes = componentes;
        },
      )
  }

  accionar(estado:boolean,evento,componente:Componente){
    console.log("Ejecutar accion sobre: ",componente);
    // Llamar al servicio conrrespondiente


    console.log('el estado estaaaaaa: ',estado)


    if(estado == true){
      this._componenteService.apagar(componente.id).subscribe(
        (respuesta)=>{
          console.log(respuesta);
        },
        (error) => console.log(error),
        ()=>{
          // Actualizar tabla
          this.refrescarComponentes(this.idHabitacion)
        }
      );

    }else{
      this._componenteService.accionar(componente.id).subscribe(
        (respuesta)=>{
          console.log(respuesta);
        },
        (error) => console.log(error),
        ()=>{
          // Actualizar tabla
          this.refrescarComponentes(this.idHabitacion)
        }
      );
    }










  }
}
