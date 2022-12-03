import { Router } from '@angular/router';
import { EventEmitter, Injectable } from '@angular/core';
import { Usuario } from 'src/app/models/usuario';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private usuarioAutenticado: boolean = false;

  mostrarMenuEmitter = new EventEmitter<boolean>();

  constructor(private router: Router) { }

  fazerLogin(usuario: Usuario) {
    if (usuario.email === "adm@unitins.br" && usuario.senha === "123"){
      this.usuarioAutenticado = true;
      this.mostrarMenuEmitter.emit(true);
      this.router.navigate(['/gerenciar-alunos']);
    } else {
      this.usuarioAutenticado = false;
      this.mostrarMenuEmitter.emit(false);
    }
  }

  usuarioEstaAutenticado (){
    return this.usuarioAutenticado;
  }

  logout (){
    if(this.usuarioAutenticado == true) {
      this.usuarioAutenticado = false;
      this.mostrarMenuEmitter.emit(false);
    } else {
      this.usuarioAutenticado = true;
      this.mostrarMenuEmitter.emit(true);
    }
  }
}
