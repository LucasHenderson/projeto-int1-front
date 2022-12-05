import { Sistema } from './../../models/sistema';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-atualizar-alunos',
  templateUrl: './atualizar-alunos.component.html',
  styleUrls: ['./atualizar-alunos.component.css']
})
export class AtualizarAlunosComponent implements OnInit {

  pegarData: Date = new Date();

  sistema: Sistema = {
    data: this.pegarData.getDate().toString() +'/'+ this.pegarData.getUTCMonth().toString() +'/'+ this.pegarData.getFullYear().toString(),
    lastAutoAtt: this.pegarData.getDate().toString() +'/'+ this.pegarData.getUTCMonth().toString() +'/'+ this.pegarData.getFullYear().toString(),
    lastManualAtt: this.pegarData.getDate().toString() +'/'+ this.pegarData.getUTCMonth().toString() +'/'+ this.pegarData.getFullYear().toString()
  }

  constructor() { }

  ngOnInit(): void {

  }

  attData(){
    alert('Sistema atualizado!')
  }

}
