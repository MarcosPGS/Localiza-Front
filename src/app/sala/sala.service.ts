import { Sala } from './../../dominio/Sala';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SalaService {
  HOST: string;
  PORTA_SERVICO: string;
  NS_SALA:string = '/sala';
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
 
listar(): Observable<Sala[]>{
  return this.http.get<Sala[]>(`${this.URL}${this.NS_SALA}`);
  }
}