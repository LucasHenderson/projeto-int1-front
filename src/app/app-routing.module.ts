import { ListarGruposComponent } from './gerenciar-grupos/listar-grupos/listar-grupos.component';
import { ListarMateriasComponent } from './materias/listar-materias/listar-materias.component';
import { AtualizarAlunosComponent } from './gerenciar-alunos/atualizar-alunos/atualizar-alunos.component';
import { LoginFormComponent } from './login/login-form/login-form.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path:"", component:LoginFormComponent },
  { path:"login", component:LoginFormComponent },
  { path:"gerenciar-alunos", component: AtualizarAlunosComponent },
  { path:"materias", component:ListarMateriasComponent },
  { path:"gerenciar-grupos", component:ListarGruposComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
