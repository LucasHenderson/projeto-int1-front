import { Router } from '@angular/router';
import { AuthService } from './login/service/services/auth.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'projeto-int1-front';

  mostrarMenu: boolean = false;

  constructor(private authService: AuthService, private router: Router) {

  }

  ngOnInit() {
    this.authService.mostrarMenuEmitter.subscribe(
      mostrar => this.mostrarMenu = mostrar
    );
  }

  fazerLogOut (){
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
