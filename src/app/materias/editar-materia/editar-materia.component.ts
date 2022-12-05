import { Curso } from './../../models/curso';
import { Component, OnInit, Input } from '@angular/core';
import { Materia } from 'src/app/models/materia';

@Component({
  selector: 'app-editar-materia',
  templateUrl: './editar-materia.component.html',
  styleUrls: ['./editar-materia.component.css']
})
export class EditarMateriaComponent implements OnInit {

  selecionarValor: string = '';

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

  @Input() materia: Materia = {
    id: 0,
    nome: '',
    periodo: 0,
    professor: '',
    atualizacao: '',
    ofertada: true,
    curso: {
      id: 0,
      nome: '',
      quantidadePeriodos: 0
    }
  }

  constructor() { }

  ngOnInit(): void {
  }


  editarMateria() {

  }
}
