import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class PlanAhorroService {

  constructor(private http: HttpClient) { }

  public calcular(plan:any){
    return this.http.post(`${baseUrl}/simulacion/`, plan);
  }

  public historico(){
    return this.http.get(`${baseUrl}/simulacion/`);
  }
}
