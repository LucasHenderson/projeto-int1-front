import { Component, OnInit } from '@angular/core';
import { Materia } from 'src/app/models/materia';

@Component({
  selector: 'app-editar-materia',
  templateUrl: './editar-materia.component.html',
  styleUrls: ['./editar-materia.component.css']
})
export class EditarMateriaComponent implements OnInit {

  materia: Materia = {
    id: 0,
    nome: '',
    periodo: 0,
    professor: '',
    atualizacao: '',
    ofertada: true
  }

  constructor() { }

  ngOnInit(): void {
  }


  editarMateria() {

  }

  cancelar() {

  }
}
