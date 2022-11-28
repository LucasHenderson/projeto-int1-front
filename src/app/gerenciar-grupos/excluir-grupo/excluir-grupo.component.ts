import { Router } from '@angular/router';
import { Grupo } from 'src/app/models/grupo';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-excluir-grupo',
  templateUrl: './excluir-grupo.component.html',
  styleUrls: ['./excluir-grupo.component.css']
})
export class ExcluirGrupoComponent implements OnInit {

  grupo: Grupo = {
    id: 0,
    plataforma: '',
    link: ''
  }

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  excluirGrupo(){

  }


}
