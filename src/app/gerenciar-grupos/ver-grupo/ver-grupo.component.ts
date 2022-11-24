import { Component, Input, OnInit } from '@angular/core';
import { Grupo } from 'src/app/models/grupo';

@Component({
  selector: 'app-ver-grupo',
  templateUrl: './ver-grupo.component.html',
  styleUrls: ['./ver-grupo.component.css']
})
export class VerGrupoComponent implements OnInit {

  @Input() grupo: Grupo = {
    id: 0,
    plataforma: '',
    link: ''
  }

  constructor() { }

  ngOnInit(): void {
  }

}
