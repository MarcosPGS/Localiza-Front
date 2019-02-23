import { Disciplina } from './../../dominio/Disciplina';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DisciplinaService {

  lista:Disciplina[]=[];
  listaAux: Disciplina[] = [];
  filtrando: boolean = false;


  constructor() { }

  adicionar(d: Disciplina){
    this.lista.push(d);  
   
 }

 alterar(d: Disciplina, posicao: number){
  this.lista[posicao]=d;
}

deletar(d: Disciplina){
  let posicaoArray = this.lista.indexOf(d);
   this.lista = this.lista.filter((tel, posicao)=>{
     posicao != posicaoArray;
 });
 }


}
