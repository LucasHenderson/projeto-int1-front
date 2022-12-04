import { Materia } from 'src/app/models/materia';
import { Grupo } from 'src/app/models/grupo';
import { Router } from '@angular/router';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-editar-grupo',
  templateUrl: './editar-grupo.component.html',
  styleUrls: ['./editar-grupo.component.css']
})
export class EditarGrupoComponent implements OnInit {

  selecionarValor: string = '';

  listaMaterias: Materia[] = [
    {
      id: 1,
      nome: 'Matéria 1',
      periodo: 1,
      professor: 'Professor 1',
      atualizacao: 'Hoje',
      ofertada: true,
      curso: {
        id: 1,
        nome: 'Teste 1',
        quantidadePeriodos: 8
      }
    },
    {
      id: 2,
      nome: 'Matéria 2',
      periodo: 2,
      professor: 'Professor 2',
      atualizacao: 'Hoje',
      ofertada: true,
      curso: {
        id: 2,
        nome: 'Teste 2',
        quantidadePeriodos: 4
      }
    },
    {
      id: 3,
      nome: 'Matéria 3',
      periodo: 3,
      professor: 'Professor 3',
      atualizacao: 'Hoje',
      ofertada: true,
      curso: {
        id: 3,
        nome: 'Teste 3',
        quantidadePeriodos: 6
      }
    }
  ]

  @Input() grupo: Grupo = {
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

  editarGrupo(grupo: Grupo) {

  }

}
