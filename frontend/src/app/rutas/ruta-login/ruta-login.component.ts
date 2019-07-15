import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {Auth} from "../../dto/usuario";
import {AuthHttpService} from "../../servicios/http/http-auth.service";
import {MatSnackBar} from "@angular/material";

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
    private _snackBar: MatSnackBar
  ) { }

  ngOnInit() {
  }
  obtenerMensajeErrorCorreo() {
    return this.controlEmail.hasError('required') ? 'Debes ingresar un correo' :
      this.controlEmail.hasError('email') ? 'correo invalido' : '';
  }

  protected mostrarMensaje(mensaje:string){
    this._snackBar.open(mensaje, "Cerrar", {
      duration: 3000,
    });
  }
  ingresar(formulario){
    if(formulario.invalid){
      return
    }
    console.log("Se va a ingresar");
    this._authService.login(
      this.auth
    ).subscribe(
      (datos)=>{
        console.log(datos);
      },
      (error)=>{
        console.log(error.error.mensaje);
        this.mostrarMensaje(error.error.mensaje);
      }
    )
    //Llamar al servicio
  }
}
