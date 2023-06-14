import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class LogService {

  constructor(private http:HttpClient) { }

  public obtenerAdmin(){
    return this.http.get(`${baseUrl}/auditoria/all`);
  }

  public obtenerAdminUsuario(usuario:any){
    return this.http.get(`${baseUrl}/auditoria/`+usuario);
  }

  public obtenerUsuario(){
    return this.http.get(`${baseUrl}/auditoria/`);
  }
  
  public obtenerBackup(dato:any){
    return this.http.get(`${baseUrl}/backup/`, dato)
  }

}
