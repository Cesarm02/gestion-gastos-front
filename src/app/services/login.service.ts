import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  public loginStatusSubject = new Subject<boolean>();

  constructor(private http:HttpClient) { }

  //Generar token 
  public generateToken(loginData:any){
    return this.http.post(`${baseUrl}/generate-token`, loginData);
  }

  //Iniciamos sesión y establece token localstorage
  public loginUser(token:any){
    localStorage.setItem('token', token);
    return true;
  }

  public isLoggedIn(){
    let tokenStr = localStorage.getItem('token');
    if(tokenStr == undefined || tokenStr == '' || tokenStr == null){
      return false;
    }else{
      return true;
    }
  }

  //Cerrando sesión
  public logoutSesion(){
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    return true;
  }

  //Obtener token
  public getToken(){
    return localStorage.getItem('token');
  }

  public setUser(user:any){
    localStorage.setItem('user', JSON.stringify(user));
  }

  public getUser(){
    let userStr = localStorage.getItem('user'); 
    if(userStr != null){
      return JSON.parse(userStr);
    }else{
      this.logoutSesion();
      return null;
    }
  }

  public getUserRol(){
    let user = this.getUser();
    return user.authorities[0].authority;
  }

  public getCurrentUser(){
    return this.http.get(`${baseUrl}/actual-usuario`);
    }

}
