import { Grupo } from 'src/app/models/grupo';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-adc-grupo',
  templateUrl: './adc-grupo.component.html',
  styleUrls: ['./adc-grupo.component.css']
})
export class AdcGrupoComponent implements OnInit {

  grupo: Grupo = {
    id: 0,
    plataforma: '',
    link: ''
  }

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  salvarGrupo() {

  }

}
