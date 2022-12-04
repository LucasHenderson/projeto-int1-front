import { Grupo } from 'src/app/models/grupo';
import { Router } from '@angular/router';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-editar-grupo',
  templateUrl: './editar-grupo.component.html',
  styleUrls: ['./editar-grupo.component.css']
})
export class EditarGrupoComponent implements OnInit {

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
      ofertada: true
    }
  }

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  editarGrupo(grupo: Grupo) {

  }

}
