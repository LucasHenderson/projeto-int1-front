import { Router } from '@angular/router';
import { Grupo } from 'src/app/models/grupo';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-excluir-grupo',
  templateUrl: './excluir-grupo.component.html',
  styleUrls: ['./excluir-grupo.component.css']
})
export class ExcluirGrupoComponent implements OnInit {

  grupo: Grupo = {
    id: 0,
    plataforma: '',
    link: '',
    materia: {
      id: 0,
      nome: '',
      periodo: 1,
      professor: '',
      atualizacao: '',
      ofertada: true,
      curso: {
        id: 0,
        nome: '',
        quantidadePeriodos: 0
      }
    }
  }

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  excluirGrupo(grupo: Grupo){

  }


}
