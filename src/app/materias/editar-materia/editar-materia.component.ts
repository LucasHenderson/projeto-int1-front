import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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

  constructor(private router: Router) { }

  ngOnInit(): void {
  }


  editarMateria() {

  }

  cancelar() {
    this.router.navigate(['/materias'])
  }
}
