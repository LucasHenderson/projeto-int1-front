import { Materia } from './../../models/materia';
import { Grupo } from './../../models/grupo';
import { Curso } from './../../models/curso';
import { AdcGrupoComponent } from './../adc-grupo/adc-grupo.component';
import { MatDialog } from '@angular/material/dialog';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-listar-grupos',
  templateUrl: './listar-grupos.component.html',
  styleUrls: ['./listar-grupos.component.css']
})
export class ListarGruposComponent implements OnInit {

  value: Materia = {
    id: 0,
    nome: '',
    periodo: 0,
    professor: '',
    atualizacao: '',
    ofertada: true,
    curso: {
      id: 0,
      nome: '',
      quantidadePeriodos: 6
    }
  }

  selecionarValor: string = '';

  @Input() grupo: Grupo = {
    id: 0,
    plataforma: '',
    link: '',
    materia: this.value
  }

  listaGrupos: Grupo[] = [
    {
      id: 1,
      plataforma: 'Telegram',
      link: 't.me/unitinsGruposBot',
      materia: {
        id: 1,
        nome: 'Matéria 1',
        periodo: 1,
        professor: 'Professor 1',
        atualizacao: 'Hoje',
        ofertada: true,
        curso: {
          id: 1,
          nome: 'Teste 1',
          quantidadePeriodos: 8
        }
      }
    },
    {
      id: 2,
      plataforma: 'WhatsApp',
      link: 't.me/unitinsGruposBot',
      materia: {
        id: 2,
        nome: 'Matéria 2',
        periodo: 2,
        professor: 'Professor 2',
        atualizacao: 'Teste 2',
        ofertada: true,
        curso: {
          id: 2,
          nome: 'Teste 2',
          quantidadePeriodos: 4
        }
      }
    },
    {
      id: 3,
      plataforma: 'Telegram',
      link: 't.me/unitinsGruposBot',
      materia: {
        id: 3,
        nome: 'Matéria 3',
        periodo: 3,
        professor: 'Professor 3',
        atualizacao: 'Teste 3',
        ofertada: true,
        curso: {
          id: 3,
          nome: 'Teste 3',
          quantidadePeriodos: 6
        }
      }
    },

  ];

  listaCursos: Curso[] = [
    {
      id: 1,
      nome: 'Sistemas',
      quantidadePeriodos: 8
    },
    {
      id: 2,
      nome: 'Direito',
      quantidadePeriodos: 4
    },
    {
      id: 3,
      nome: 'Agronomia',
      quantidadePeriodos: 6
    }
  ]

  constructor(public dialog: MatDialog) { }

  openDialogAdcGrupo() {
    const dialogRef = this.dialog.open(AdcGrupoComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  ngOnInit(): void {
  }

}
