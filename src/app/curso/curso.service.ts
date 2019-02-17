import { Curso } from './../../dominio/Curso';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CursoService {
  HOST: string;
  PORTA_SERVICO: string;
  ENDPOINT: string;
  NS_CURSO:string = '/curso';
  URL: string;

  constructor(private http: HttpClient) {
    this.HOST = environment.apiUrl;
    this.PORTA_SERVICO = environment.porta;
    this.ENDPOINT = environment.endpoint;

    this.URL= `${this.HOST}${this.PORTA_SERVICO}${this.ENDPOINT}`;
   }

getHeaders(){
  let headers = new HttpHeaders();
  headers = headers.append("Content-Type", "application/json");
}

listar():Observable<Curso[]>{
  return this.http.get<Curso[]>(`${this.URL}${this.NS_CURSO}`);
}
}