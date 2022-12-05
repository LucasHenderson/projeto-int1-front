import { Curso } from './../../models/curso';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-cursos',
  templateUrl: './listar-cursos.component.html',
  styleUrls: ['./listar-cursos.component.css']
})
export class ListarCursosComponent implements OnInit {

  listaCursos: Curso[] = [
    {
      id: 1,
      nome: 'Sistemas',
      quantidadePeriodos: 8
    },
    {
      id: 2,
      nome: 'Direito',
      quantidadePeriodos: 4
    },
    {
      id: 3,
      nome: 'Agronomia',
      quantidadePeriodos: 6
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
