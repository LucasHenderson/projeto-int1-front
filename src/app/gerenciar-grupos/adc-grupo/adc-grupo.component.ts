import { Materia } from 'src/app/models/materia';
import { Grupo } from 'src/app/models/grupo';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-adc-grupo',
  templateUrl: './adc-grupo.component.html',
  styleUrls: ['./adc-grupo.component.css']
})
export class AdcGrupoComponent implements OnInit {

  selecionarValor: string = '';

  listaMaterias: Materia[] = [
    {
      id: 1,
      nome: 'Matéria 1',
      periodo: 1,
      professor: 'Professor 1',
      atualizacao: 'Hoje',
      ofertada: true
    },
    {
      id: 2,
      nome: 'Matéria 2',
      periodo: 2,
      professor: 'Professor 2',
      atualizacao: 'Hoje',
      ofertada: true
    },
    {
      id: 3,
      nome: 'Matéria 3',
      periodo: 3,
      professor: 'Professor 3',
      atualizacao: 'Hoje',
      ofertada: true
    }
  ]

  grupo: Grupo = {
    id: 0,
    plataforma: '',
    link: '',
    materia: {
      id: 0,
      nome: '',
      periodo: 0,
      professor: '',
      atualizacao: '',
      ofertada: true
    }
  }

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  salvarGrupo() {

  }

}
