import { Professor } from './../../dominio/Professor';
import { FiltroProfessor } from './../../dominio/FiltroProfessor';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ProfessorService {
  HOST: string;
  PORTA_SERVICO: string;
  NS_PROFESSOR:string = '/professor';
  NS_PESQUISAR: string ='/pesquisar';
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
pesquisar(f : FiltroProfessor):Observable<Professor[]>{
  return this.http.post<Professor[]>(`${this.HOST}${this.PORTA_SERVICO}${this.NS_PROFESSOR}${this.NS_PESQUISAR}`
  ,f,{headers:  this.getHeaders() });

}

listar(): Observable<Professor[]>{
return this.http.get<Professor[]>(`${this.URL}${this.NS_PROFESSOR}`);
}
// buscarPorNome(nome: string): Observable<string>{
//  return this.http.get<string>(`${this.URL}${this.NS_CONVIDADO}/${nome}`);
// }

salvar(p: Professor): Observable<Professor>{
 return this.http.post<Professor>(`${this.HOST}${this.PORTA_SERVICO}${this.NS_PROFESSOR}`,p);
}

atualizar(p: Professor): Observable<Professor>{
  return this.http.put<Professor>(`${this.HOST}${this.PORTA_SERVICO}${this.NS_PROFESSOR}`,p);
 }

 deletar(id: number): Observable<string>{
return this.http.delete<string>(`${this.HOST}${this.PORTA_SERVICO}${this.NS_PROFESSOR}/${id}`)
 }

}
