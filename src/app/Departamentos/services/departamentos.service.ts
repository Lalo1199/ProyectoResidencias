import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Departamento } from '../../interfaces/departamento.interface';


@Injectable({
  providedIn: 'root'
})
export class DepartamentosService {
  // eliminarDepartamento(arg0: number) {
  //   throw new Error('Method not implemented.');
  // }

  private Apidepartamentos: string = environment.Apidepartamentos

  constructor( private http: HttpClient ) { }

  getDepartamento () {
    return this.http.get<Departamento[]>( this.Apidepartamentos);
  }

  agregarDepartamento ( departamento: Departamento ): Observable<Departamento>{
      return this.http.post<Departamento>(this.Apidepartamentos, departamento );
  }

  actualizarDepartamento ( departamento: Departamento ){
    return this.http.put<Departamento>(this.Apidepartamentos, departamento );
  }

  eliminarDepartamento( id: number ): Observable<any>{
   console.log(id)
    return this.http.delete<any>( `${ this.Apidepartamentos }/${id}` ) ;
  }
  // `${ this.Apidepartamentos }/${id}`
  // this.Apidepartamentos +'/'+ id
}
