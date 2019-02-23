import { Curso } from './../../dominio/Curso';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CursoService {
  lista:Curso[]=[];
  listaAux: Curso[] = [];
  filtrando: boolean = false;


 
  HOST: string;
  PORTA_SERVICO: string;
  NS_CURSO:string = '/curso';
  URL: string;

  constructor(private http: HttpClient) {
    this.HOST = environment.apiUrl;
    this.PORTA_SERVICO = environment.porta;

    this.URL= `${this.HOST}${this.PORTA_SERVICO}`;
   }



 
listar(): Observable<Curso[]>{
  return this.http.get<Curso[]>(`${this.URL}${this.NS_CURSO}`);
  }






}