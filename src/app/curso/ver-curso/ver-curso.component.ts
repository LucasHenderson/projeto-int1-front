import { MatDialog } from '@angular/material/dialog';
import { EditarCursoComponent } from './../editar-curso/editar-curso.component';
import { Curso } from './../../models/curso';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-ver-curso',
  templateUrl: './ver-curso.component.html',
  styleUrls: ['./ver-curso.component.css']
})
export class VerCursoComponent implements OnInit {

  @Input() curso: Curso = {
    id: 0,
    nome: '',
    quantidadePeriodos: 0
  }

  openDialogEditCurso() {
    const dialogRef = this.dialog.open(EditarCursoComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

}
