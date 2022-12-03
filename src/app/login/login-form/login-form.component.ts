import { Usuario } from './../../models/usuario';
import { AuthService } from './../service/services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  usuario: Usuario = {
    email: '',
    senha: ''
  }

  hide = true;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  fazerLogin(){
    this.authService.fazerLogin(this.usuario);
  }
}
