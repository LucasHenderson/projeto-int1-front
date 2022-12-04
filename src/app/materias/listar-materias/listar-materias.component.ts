import { Component, OnInit } from '@angular/core';
import { Materia } from 'src/app/models/materia';

@Component({
  selector: 'app-listar-materias',
  templateUrl: './listar-materias.component.html',
  styleUrls: ['./listar-materias.component.css']
})
export class ListarMateriasComponent implements OnInit {

  listaMaterias: Materia[] = [
    {
      id: 1,
      nome: 'Teste',
      periodo: 1,
      professor: 'Teste',
      atualizacao: 'Teste',
      ofertada: true,
      curso: {
        id: 1,
        nome: 'Teste',
        quantidadePeriodos: 8
      }
    },
    {
      id: 2,
      nome: 'Teste 2',
      periodo: 2,
      professor: 'Teste 2',
      atualizacao: 'Teste 2',
      ofertada: false,
      curso: {
        id: 2,
        nome: 'Teste 2',
        quantidadePeriodos: 4
      }
    },
    {
      id: 3,
      nome: 'Teste 3',
      periodo: 3,
      professor: 'Teste 3',
      atualizacao: 'Teste 3',
      ofertada: true,
      curso: {
        id: 3,
        nome: 'Teste 3',
        quantidadePeriodos: 6
      }
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
