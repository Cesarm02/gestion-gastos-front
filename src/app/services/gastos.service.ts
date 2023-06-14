import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class GastosService {

  constructor(private http:HttpClient) { }

  public obtenerAll(){
    return this.http.get(`${baseUrl}/agenda/`);
  }

  public obtenerId(gastosId:any){
    return this.http.get(`${baseUrl}/agenda/`+gastosId);
  }

  public agregarGasto(gasto:any){
    return this.http.post(`${baseUrl}/agenda/`, gasto);
  }

  public editarGasto(gasto:any){
    return this.http.put(`${baseUrl}/agenda/`, gasto);
  }

  public eliminarGasto(gastoId:any){
    return this.http.delete(`${baseUrl}/agenda/`+ gastoId);
  }

}
