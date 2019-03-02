import { Bloco } from './../../dominio/Bloco';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BlocoService {
  HOST: string;
  PORTA_SERVICO: string;
  NS_BLOCO:string = '/bloco';
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
 
listar(): Observable<Bloco[]>{
  return this.http.get<Bloco[]>(`${this.URL}${this.NS_BLOCO}`);
  }
}
