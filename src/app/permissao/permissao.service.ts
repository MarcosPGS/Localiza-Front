import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Permissao } from 'src/dominio/Permissao';

@Injectable({
  providedIn: 'root'
})
export class PermissaoService {
  HOST: string;
  PORTA_SERVICO: string;
  NS_PERMISSAO:string = '/permissao';
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

 
listar(): Observable<Permissao[]>{
  return this.http.get<Permissao[]>(`${this.URL}${this.NS_PERMISSAO}`);
  }
}
