import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  constructor(private http: HttpClient) { }

  public listarCategorias(){
    return this.http.get(`${baseUrl}/categoria/`);
  }

  public guardarCategoria(categoria:any){
    return this.http.post(`${baseUrl}/categoria/`, categoria);
  }

  public editarCategoria(categoria:any){
    return this.http.put(`${baseUrl}/categoria/`, categoria);
  }

  public obtenerCategoria(categoriaId:any){
    return this.http.get(`${baseUrl}/categoria/`+categoriaId);

  }

}
