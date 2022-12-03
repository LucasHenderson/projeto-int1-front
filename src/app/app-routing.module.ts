import { AuthGuard } from './guards/guards/auth.guard';
import { AdcGrupoComponent } from './gerenciar-grupos/adc-grupo/adc-grupo.component';
import { ExcluirGrupoComponent } from './gerenciar-grupos/excluir-grupo/excluir-grupo.component';
import { EditarGrupoComponent } from './gerenciar-grupos/editar-grupo/editar-grupo.component';
import { EditarMateriaComponent } from './materias/editar-materia/editar-materia.component';
import { ListarGruposComponent } from './gerenciar-grupos/listar-grupos/listar-grupos.component';
import { ListarMateriasComponent } from './materias/listar-materias/listar-materias.component';
import { AtualizarAlunosComponent } from './gerenciar-alunos/atualizar-alunos/atualizar-alunos.component';
import { LoginFormComponent } from './login/login-form/login-form.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path:"", component:LoginFormComponent },
  { path:"login", component:LoginFormComponent },
  { path:"gerenciar-alunos", component: AtualizarAlunosComponent, canActivate:[AuthGuard] },
  { path:"materias", component:ListarMateriasComponent, canActivate:[AuthGuard] },
  { path:"gerenciar-grupos", component:ListarGruposComponent, canActivate:[AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
