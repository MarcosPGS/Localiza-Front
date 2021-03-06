import { Disciplina } from './../../dominio/Disciplina';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DisciplinaService {
  HOST: string;
  PORTA_SERVICO: string;
  NS_DISCIPLINA:string = '/disciplina';
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

 
listar(): Observable<Disciplina[]>{
  return this.http.get<Disciplina[]>(`${this.URL}${this.NS_DISCIPLINA}`);
  }
}
