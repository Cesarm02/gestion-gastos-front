import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class CuentaService {

  constructor(private http: HttpClient) { }

  public obtenerCuentas(){
    return this.http.get(`${baseUrl}/cuenta/`);
  }

  public guardarCuenta(cuenta:any){
    return this.http.post(`${baseUrl}/cuenta/`, cuenta);
  }

  public obtenerCuentaPorId(cuentaId:any){
    return this.http.get(`${baseUrl}/cuenta/` + cuentaId)
  }

  public editarCuenta(cuenta:any){
    return this.http.put(`${baseUrl}/cuenta/`, cuenta);
  }

}
