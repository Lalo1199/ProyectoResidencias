import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AgregarComponent} from '../agregar/agregar.component';
import { EliminarComponent } from '../eliminar/eliminar.component';
import { DepartamentosService } from '../../services/departamentos.service';
import { Departamento } from 'src/app/interfaces/departamento.interface';
import { MatTableDataSource } from '@angular/material/table';


@Component({
  selector: 'app-departamentos',
  templateUrl: './departamentos.component.html',
  styles: [`
  table {
    width: 100%;
  }`
  ]
})
export class DepartamentosComponent { //implements OnInit {

  constructor( public dialog: MatDialog, 
               private departamentosService: DepartamentosService ) { }

  departamentos: Departamento[] = [];
  departamento!: Departamento;
  
  displayedColumns: string[] = ['Id, Departamento, Desistema, Editar'];
  dataSource = new MatTableDataSource<Departamento>(this.departamentos);

  agregarDepartamento (){
    const dialog = this.dialog.open( AgregarComponent, {
      width: '350px'
    });
  }

  eliminarDepartamento (){
    const dialog = this.dialog.open( EliminarComponent, {
      width: '350px'
    });
  
}

editarDepartamento ( departamento: Departamento){
  const dialog = this.dialog.open( AgregarComponent, {
    width: '350px',
    data: departamento,
  });
}

  ngOnInit(): void {
    this.departamentosService.getDepartamento()
    .subscribe( respuesta => {
      this.departamentos = respuesta;
      console.log(this.departamentos)
    })
  }
}
