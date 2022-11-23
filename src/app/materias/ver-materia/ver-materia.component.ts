import { Component, Input, OnInit } from '@angular/core';
import { Materia } from 'src/app/models/materia';

@Component({
  selector: 'app-ver-materia',
  templateUrl: './ver-materia.component.html',
  styleUrls: ['./ver-materia.component.css']
})
export class VerMateriaComponent implements OnInit {

  @Input() materia: Materia = {
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

}
