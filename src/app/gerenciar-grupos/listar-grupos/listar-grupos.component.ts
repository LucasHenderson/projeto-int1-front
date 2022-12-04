import { AdcGrupoComponent } from './../adc-grupo/adc-grupo.component';
import { MatDialog } from '@angular/material/dialog';
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
      materia: {
        id: 1,
        nome: 'Matéria',
        periodo: 1,
        professor: 'Professor',
        atualizacao: 'Teste',
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
      plataforma: 'Teste 2',
      link: 'Teste 2',
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
      plataforma: 'Teste 3',
      link: '3',
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
    }
  ];

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
