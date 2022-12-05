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
      nome: 'Algoritmos e Programação',
      periodo: 1,
      professor: 'Professor 1',
      atualizacao: 'Hoje',
      ofertada: true,
      curso: {
        id: 1,
        nome: 'Sistemas',
        quantidadePeriodos: 8
      }
    },
    {
      id: 2,
      nome: 'Ciência Política',
      periodo: 2,
      professor: 'Professor 2',
      atualizacao: 'Hoje',
      ofertada: false,
      curso: {
        id: 2,
        nome: 'Direito',
        quantidadePeriodos: 4
      }
    },
    {
      id: 3,
      nome: 'Microbiologia Agrícola',
      periodo: 3,
      professor: 'Professor 3',
      atualizacao: 'Hoje',
      ofertada: true,
      curso: {
        id: 3,
        nome: 'Agronomia',
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
