import { ExcluirGrupoComponent } from './../excluir-grupo/excluir-grupo.component';
import { EditarGrupoComponent } from './../editar-grupo/editar-grupo.component';
import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
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

  constructor(public dialog: MatDialog) { }

  openDialogEdit() {
    const dialogRef = this.dialog.open(EditarGrupoComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  openDialogDelete() {
    const dialogRef = this.dialog.open(ExcluirGrupoComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  ngOnInit(): void {
  }

}
