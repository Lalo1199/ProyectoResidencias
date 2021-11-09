import { Component, Inject, OnInit } from '@angular/core';
// import { Departamento } from 'src/app/interfaces/departamento.interface';
import { EliminarComponent } from '../eliminar/eliminar.component';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DepartamentosService } from '../../services/departamentos.service';
import { Router } from '@angular/router';
// import { MatSnackBar } from '@angular/material/snack-bar'
import { FormGroup } from '@angular/forms';
import { Departamento } from 'src/app/interfaces/departamento.interface';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styles: [
  ]
})
export class AgregarComponent implements OnInit  {
formuladioDepartamento !: FormGroup;

color: string = 'accent';

   constructor(  
    private departamentosService: DepartamentosService,
                private router: Router,
                private dialog: MatDialog,
                @Inject(MAT_DIALOG_DATA) public data: Departamento
                // private snackBar: MatSnackBar 
                ) { }

  ngOnInit(): void {
    if (this.data) {
      this.departamento = this.data;
    }
  }
  
departamento: Departamento = {
// id:0,
departamento: '',
// desistema: 0,
}

guardarDepartamento(){

  if (this.data) {
    this.departamentosService.actualizarDepartamento(this.departamento)
      .subscribe( departamento => 
        console.log('Registro actualizado') )
  } else {
    this.departamentosService.agregarDepartamento( this.departamento )
      .subscribe( d => {
        this.router.navigate(['departamentos']);
        console.log('Registro creado')
      } )
  }
  window.location.reload();
}

eliminarDepartamento (){
  const dialog = this.dialog.open( EliminarComponent, {
    width: '250 px',
    data: this.departamento
  });

  dialog.afterClosed().subscribe(
    ( r ) => {
      if (r) {
        this.departamentosService.eliminarDepartamento( this.departamento.id! )
          .subscribe( r => {
            this.router.navigate(['/departamentos']);
            console.log('Registro eliminado');
            window.location.reload();
          })
      }
    }
  )
  
}

  // mostrarSnackBar( mensaje: string): void {
  //   this.snackBar.open( mensaje, 'close', {
  //     duration: 15000
  //   });
  // }
}


