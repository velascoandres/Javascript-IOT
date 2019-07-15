import { Component, OnInit } from '@angular/core';
import {Form, FormControl, Validators} from "@angular/forms";
import {Usuario} from "../../dto/usuario";
import {UsuarioHttpService} from "../../servicios/http/http-usuario.service";

@Component({
  selector: 'app-ruta-registro',
  templateUrl: './ruta-registro.component.html',
  styleUrls: ['./ruta-registro.component.css']
})
export class RutaRegistroComponent implements OnInit {


  usuario:Usuario={correo:'',apellido:'',nombre:'',clave:''};

  controlEmail = new FormControl('', [Validators.required, Validators.email]);
  esconderPassword:boolean = true;

  constructor(
    private readonly _usuarioService:UsuarioHttpService,
  ) { }

  ngOnInit() {
  }

  obtenerMensajeErrorCorreo() {
    return this.controlEmail.hasError('required') ? 'Debes ingresar un correo' :
      this.controlEmail.hasError('email') ? 'correo invalido' : '';
  }

  registrar(formulario){
    if(formulario.invalid){
      return
    }
    console.log("Se va a registrar un usuario");
    this._usuarioService.crear(
      this.usuario
    ).subscribe(
      (nuevo)=>console.log(nuevo),
      (error)=>console.log(error),
      ()=>{
        //Redirigir a inicio
      }
    )
    //Llamar al servicio
  }
}
