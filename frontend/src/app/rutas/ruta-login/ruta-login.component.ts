import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {Auth, Usuario} from "../../dto/usuario";
import {UsuarioHttpService} from "../../servicios/http/http-usuario.service";
import {AuthHttpService} from "../../servicios/http/http-auth.service";

@Component({
  selector: 'app-ruta-login',
  templateUrl: './ruta-login.component.html',
  styleUrls: ['./ruta-login.component.css']
})
export class RutaLoginComponent implements OnInit {

  controlEmail = new FormControl('', [Validators.required, Validators.email]);
  esconderPassword:boolean = true;
  auth:Auth={clave:'',correo:''};

  constructor(
    private readonly _authService:AuthHttpService,
  ) { }

  ngOnInit() {
  }
  obtenerMensajeErrorCorreo() {
    return this.controlEmail.hasError('required') ? 'Debes ingresar un correo' :
      this.controlEmail.hasError('email') ? 'correo invalido' : '';
  }

  ingresar(formulario){
    if(formulario.invalid){
      return
    }
    console.log("Se va a ingresar");
    this._authService.login(
      this.auth
    ).subscribe(
      (datos)=>console.log(datos),
      (error)=>console.log(error),
    )
    //Llamar al servicio
  }
}
