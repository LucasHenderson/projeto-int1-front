import { Component, OnInit } from '@angular/core';
import { Grupo } from 'src/app/models/grupo';

@Component({
  selector: 'app-listar-grupos',
  templateUrl: './listar-grupos.component.html',
  styleUrls: ['./listar-grupos.component.css']
})
export class ListarGruposComponent implements OnInit {

  listaGrupos: Grupo[] = [
    {
      id: 1,
      plataforma: 'Teste',
      link: 'Teste',
    },
    {
      id: 2,
      plataforma: 'Teste 2',
      link: 'Teste 2',
    },
    {
      id: 3,
      plataforma: 'Teste 3',
      link: '3',
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
