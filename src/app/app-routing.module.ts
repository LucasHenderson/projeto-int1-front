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
  { path:"gerenciar-alunos", component: AtualizarAlunosComponent },
  { path:"materias", component:ListarMateriasComponent },
  { path:"gerenciar-grupos", component:ListarGruposComponent },
  { path:"editar-materia", component:EditarMateriaComponent },
  { path:"editar-grupo", component:EditarGrupoComponent },
  { path:"excluir-grupo", component:ExcluirGrupoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
