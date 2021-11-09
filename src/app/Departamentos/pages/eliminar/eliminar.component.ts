import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Departamento } from 'src/app/interfaces/departamento.interface';

@Component({
  selector: 'app-eliminar',
  templateUrl: './eliminar.component.html',
  styles: [

  ]
})
export class EliminarComponent {

  departamento: Departamento = {
    id: 0,
    departamento: '',
    desistema: 0
    }

  constructor(  
    private dialogRef: MatDialogRef<EliminarComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Departamento ) { }

 borrar(){
   this.dialogRef.close( true );
 }

 cerrar() {
   this.dialogRef.close();
 }

}
