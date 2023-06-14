import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class TransaccionService {

  constructor(private http: HttpClient) { }

  public obtenerPorCuenta(cuentaId:any){
    return this.http.get(`${baseUrl}/transaccion/`+cuentaId);
  }

  public guardarTransaccion(transaccion:any){
    return this.http.post(`${baseUrl}/transaccion/`, transaccion);
  }

  public actualizarTransaccion(transaccion:any){
    return this.http.put(`${baseUrl}/transaccion/`, transaccion);
  }

  public obtenerPorCategoria(categoriaId:any){
    return this.http.get(`${baseUrl}/transaccion/categoria/`+categoriaId);
  }

  public obtenerPorCuentaCategoria(cuentaId:any, categoriaId:any){
    return this.http.get(`${baseUrl}/transaccion/`+cuentaId + '/' + categoriaId);
  }

  public eliminarTransaccion(transaccionId:any){
    return this.http.delete(`${baseUrl}/transaccion/`+transaccionId);
  }

  public obtenerPorId(transaccionId:any){
    return this.http.get(`${baseUrl}/transaccion/id/`+transaccionId);
  }

}
