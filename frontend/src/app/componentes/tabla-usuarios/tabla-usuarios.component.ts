import {Component, Input, OnInit} from '@angular/core';
import {UsuarioHttpService} from "../../servicios/http/http-usuario.service";
import {Usuario} from "../../dto/usuario";

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
      console.log('Aqui');
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

  asignar(evento,idUsuario:number){
    console.log(evento);
    if(evento.checked){
      console.log("Asignar a: ",idUsuario);
    }else {
      console.log("Desasignar a: ",idUsuario);
    }
  }

  refrescarUsuarios(){
    this._usuarioService.listar().subscribe(
      (usuarios)=>this.usuarios = usuarios,
      (error)=>console.log(error),
    )
  }

}
