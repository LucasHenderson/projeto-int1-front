
import { FormsModule } from '@angular/forms'
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginFormComponent } from './login/login-form/login-form.component';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material/menu';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatButtonModule} from '@angular/material/button';
import { AtualizarAlunosComponent } from './gerenciar-alunos/atualizar-alunos/atualizar-alunos.component';
import { ListarMateriasComponent } from './materias/listar-materias/listar-materias.component';
import { ListarGruposComponent } from './gerenciar-grupos/listar-grupos/listar-grupos.component';
import {MatCardModule} from '@angular/material/card';
import { VerMateriaComponent } from './materias/ver-materia/ver-materia.component';
import { EditarMateriaComponent } from './materias/editar-materia/editar-materia.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginFormComponent,
    AtualizarAlunosComponent,
    ListarMateriasComponent,
    ListarGruposComponent,
    VerMateriaComponent,
    EditarMateriaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatToolbarModule,
    MatMenuModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatCardModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
