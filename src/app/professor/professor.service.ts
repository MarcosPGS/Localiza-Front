import { Professor } from './../../dominio/Professor';
import { FiltroProfessor } from './../../dominio/FiltroProfessor';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Curso } from 'src/dominio/Curso';

@Injectable({
  providedIn: 'root'
})
export class ProfessorService {
  HOST: string;
  PORTA_SERVICO: string;
  ENDPOINT: string;
  NS_PROFESSOR:string = '/professor';
  NS_PESQUISAR: string ='/pesquisar';
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
pesquisar(f : FiltroProfessor):Observable<Professor[]>{
  return this.http.post<Professor[]>(`${this.HOST}${this.PORTA_SERVICO}${this.ENDPOINT}${this.NS_PROFESSOR}${this.NS_PESQUISAR}`
  ,f);

}

// listar(): Observable<Professor[]>{
// return this.http.get<Convidado[]>(`${this.URL}${this.NS_CONVIDADO}`);
// }
// buscarPorNome(nome: string): Observable<string>{
//  return this.http.get<string>(`${this.URL}${this.NS_CONVIDADO}/${nome}`);
// }

// salvar(c: Convidado): Observable<Convidado>{
//  return this.http.post<Convidado>(`${this.HOST}${this.PORTA_SERVICO}${this.ENDPOINT}${this.NS_CONVIDADO}`,c);
// }

// atualizar(c: Convidado): Observable<Convidado>{
//   return this.http.put<Convidado>(`${this.HOST}${this.PORTA_SERVICO}${this.ENDPOINT}${this.NS_CONVIDADO}`,c);
//  }
//  deletar(id: number): Observable<string>{
// return this.http.delete<string>(`${this.HOST}${this.PORTA_SERVICO}${this.ENDPOINT}${this.NS_CONVIDADO}/${id}`)
//  }

}
