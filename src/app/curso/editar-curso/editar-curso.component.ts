import { Curso } from './../../models/curso';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-editar-curso',
  templateUrl: './editar-curso.component.html',
  styleUrls: ['./editar-curso.component.css']
})
export class EditarCursoComponent implements OnInit {

  curso: Curso = {
    id: 0,
    nome: '',
    quantidadePeriodos: 0
  }

  constructor() { }

  ngOnInit(): void {
  }

  editarCurso() {

  }

}
