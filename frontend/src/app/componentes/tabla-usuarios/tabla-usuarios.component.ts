import {Component, Input, OnInit} from '@angular/core';
import {UsuarioHttpService} from "../../servicios/http/http-usuario.service";
import {Usuario} from "../../dto/usuario";
import {UsuarioSitioHttpService} from "../../servicios/http/http-usuario-sitio.service";
import {UsuarioHabitacionHttpService} from "../../servicios/http/http-usuario-habitacion.service";

@Component({
  selector: 'app-tabla-usuarios',
  templateUrl: './tabla-usuarios.component.html',
  styleUrls: ['./tabla-usuarios.component.css']
})
export class TablaUsuariosComponent implements OnInit {

  @Input()
  idEntidad:number;
  @Input()
  entidadTipo:string;

  usuarios:Usuario[]=[];
  nombreBusqueda:string;

  constructor(
    private readonly _usuarioService:UsuarioHttpService,
    private readonly _usuarioSitioService:UsuarioSitioHttpService,
    private readonly _usuarioHabitacionService:UsuarioHabitacionHttpService,
  ) { }

  ngOnInit() {
    this.refrescarUsuarios();
  }

  buscarUsuario(){
    this._usuarioService.buscarParametro(
      {nombre:{contains:this.nombreBusqueda}}
    ).subscribe(
      (resultados)=>this.usuarios = resultados,
      (error)=>console.log(error)
    );
  }

  verificarAsignacion(usuario:Usuario):boolean{
    if(this.entidadTipo == 'sitio'){
      //console.log('Aqui: ',usuario);
      return usuario.sitios.some(
        (usuarioSitio)=>{
          return usuarioSitio.fkSitio === this.idEntidad
        }
      );
    }
    if(this.entidadTipo === 'habitacion'){
      return usuario.habitaciones.some(
        (usuarioSitio)=>{return usuarioSitio.fkHabitacion == this.idEntidad }
      );
    }
  }

  protected asignar(idUsuario){
    if(this.entidadTipo === 'habitacion'){
      this._usuarioHabitacionService.crear(
        {
          fkHabitacion:this.idEntidad,
          fkUsuario:idUsuario,
        }
      );
    }
    if(this.entidadTipo === 'sitio'){
      this._usuarioSitioService.crear(
        {
          fkSitio:this.idEntidad,
          fkUsuario:idUsuario,
        }
      ).subscribe(
        (nuevo)=>console.log(nuevo),
      );
    }
  }

  protected quitar(idUsuario){
    if(this.entidadTipo === 'habitacion'){
      this._usuarioHabitacionService.buscarParametro(
        {fkUsuario:idUsuario,fkHabitacion:this.idEntidad}
      ).subscribe(
        (usuarioSitio)=>{
            this._usuarioHabitacionService.borrar(usuarioSitio[0].id).subscribe(
              (borrado)=>console.log(borrado),
            );
          },
        (error)=>{console.log(error);}
      );
    }
    if(this.entidadTipo === 'sitio'){
      this._usuarioSitioService.buscarParametro(
        {fkUsuario:idUsuario,fkSitio:this.idEntidad}
      ).subscribe(
        (usuarioSitio)=>{
          console.log("Se econtro ",usuarioSitio);
          this._usuarioSitioService.borrar(usuarioSitio[0].id).subscribe(
            (borrado)=>console.log("se borro:", borrado),
          );
        },
        (error)=>{console.log(error);}
      );
    }
  }

  gestionUsuario(evento,idUsuario:number){
    console.log(evento);
    if(evento.checked){
      console.log("Asignar a: ",idUsuario);
      this.asignar(idUsuario);
    }else {
      console.log("Desasignar a: ",idUsuario);
      this.quitar(idUsuario);
    }
  }

  refrescarUsuarios(){
    this._usuarioService.listar().subscribe(
      (usuarios)=>this.usuarios = usuarios,
      (error)=>console.log(error),
    )
  }

}
