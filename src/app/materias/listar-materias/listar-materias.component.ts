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
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
