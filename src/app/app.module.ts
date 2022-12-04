import { AuthGuard } from './guards/guards/auth.guard';
import { AuthService } from './login/service/services/auth.service';

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
import { VerGrupoComponent } from './gerenciar-grupos/ver-grupo/ver-grupo.component';
import { EditarGrupoComponent } from './gerenciar-grupos/editar-grupo/editar-grupo.component';
import { ExcluirGrupoComponent } from './gerenciar-grupos/excluir-grupo/excluir-grupo.component';
import { AdcGrupoComponent } from './gerenciar-grupos/adc-grupo/adc-grupo.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import { VerCursoComponent } from './curso/ver-curso/ver-curso.component';
import { EditarCursoComponent } from './curso/editar-curso/editar-curso.component';
import { ListarCursosComponent } from './curso/listar-cursos/listar-cursos.component';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatSliderModule} from '@angular/material/slider';

@NgModule({
  declarations: [
    AppComponent,
    LoginFormComponent,
    AtualizarAlunosComponent,
    ListarMateriasComponent,
    ListarGruposComponent,
    VerMateriaComponent,
    EditarMateriaComponent,
    VerGrupoComponent,
    EditarGrupoComponent,
    ExcluirGrupoComponent,
    AdcGrupoComponent,
    VerCursoComponent,
    EditarCursoComponent,
    ListarCursosComponent
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
    FormsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatSlideToggleModule,
    MatSliderModule
  ],
  providers: [AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
