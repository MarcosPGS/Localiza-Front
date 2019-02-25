import { ProfessorService } from './../professor.service';
import { Permissao } from './../../../dominio/Permissao';
import { Professor } from './../../../dominio/Professor';
import { Router, ActivatedRoute } from '@angular/router';
import { Disciplina } from './../../../dominio/Disciplina';
import { Component, OnInit } from '@angular/core';
import { FiltroProfessor } from 'src/dominio/FiltroProfessor';

@Component({
  selector: 'app-professor-form',
  templateUrl: './professor-form.component.html',
  styleUrls: ['./professor-form.component.css']
})
export class ProfessorFormComponent implements OnInit {
professor: Professor = new Professor();
listaPermissao: Permissao[] = []; 
filtro: FiltroProfessor = new FiltroProfessor();

  constructor(private router: Router, private activatedRoute: ActivatedRoute,private ps: ProfessorService) { }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(dadosDaPesquisa=>{
      console.log(JSON.parse(dadosDaPesquisa.prof));

      this.professor = JSON.parse(dadosDaPesquisa.prof);  
    });
  }

  voltar(){
  this.router.navigate(["/localiza/pesquisa"]);
  }

  
// pesquisar(){  
//   this.ps.pesquisar(this.filtro).subscribe(dadosDoServidor=>{
//     this.listaPermissao =dadosDoServidor;
//     console.log(this.listaPermissao);  

//   }, error=>{

//   });

//   }



}
