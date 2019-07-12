import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-ruta-login',
  templateUrl: './ruta-login.component.html',
  styleUrls: ['./ruta-login.component.css']
})
export class RutaLoginComponent implements OnInit {

  controlEmail = new FormControl('', [Validators.required, Validators.email]);
  esconderPassword:boolean = true;

  constructor() { }

  ngOnInit() {
  }
  obtenerMensajeErrorCorreo() {
    return this.controlEmail.hasError('required') ? 'Debes ingresar un correo' :
      this.controlEmail.hasError('email') ? 'correo invalido' : '';
  }
}
