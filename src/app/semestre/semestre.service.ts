import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Semestre } from 'src/dominio/Semestre';

@Injectable({
  providedIn: 'root'
})
export class SemestreService {
  HOST: string;
  PORTA_SERVICO: string;
  NS_SEMESTRE:string = '/semestre';
  URL: string;

  constructor(private http: HttpClient) {
    this.HOST = environment.apiUrl;
    this.PORTA_SERVICO = environment.porta;

    this.URL= `${this.HOST}${this.PORTA_SERVICO}`;
   }


   getHeaders(){
    let headers = new HttpHeaders();
    headers = headers.append("Content-Type", "application/json");
    return headers;
  }
 
listar(): Observable<Semestre[]>{
  return this.http.get<Semestre[]>(`${this.URL}${this.NS_SEMESTRE}`);
  }
}