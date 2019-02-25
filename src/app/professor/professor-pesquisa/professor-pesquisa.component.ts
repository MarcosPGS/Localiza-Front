import { DisciplinaService } from './../../disciplina/disciplina.service';
import { Disciplina } from './../../../dominio/Disciplina';
import { Professor } from './../../../dominio/Professor';
import { ProfessorService } from './../professor.service';
import { FiltroProfessor } from './../../../dominio/FiltroProfessor';
import { Curso } from './../../../dominio/Curso';
import { CursoService } from './../../curso/curso.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-professor-pesquisa',
  templateUrl: './professor-pesquisa.component.html',
  styleUrls: ['./professor-pesquisa.component.css']
})
export class ProfessorPesquisaComponent implements OnInit {
  
  listaCursos:Curso[] = [];
  listaDisciplinas: Disciplina[] = [];
  filtro: FiltroProfessor = new FiltroProfessor();

listaProfessores: Professor[]=[];

  constructor(private sc: CursoService, private ds: DisciplinaService,private ps: ProfessorService, private router: Router) { }

  ngOnInit() {

    this.sc.listar().subscribe(dadosDoServidor=>{
      this.listaCursos = dadosDoServidor;      
    },error=>{
    });
    this.ds.listar().subscribe(dadosDoServidor=>{
      this.listaDisciplinas = dadosDoServidor;      
    },error=>{
    });
    
   
  }

pesquisar(){
  this.ps.pesquisar(this.filtro).subscribe(dadosDoServidor=>{
    this.listaProfessores =dadosDoServidor;
    this
    console.log(this.listaProfessores);  

  }, error=>{

  });

  }

  visualizar(professor: Professor){
    this.router.navigate(["/localiza/formulario"],
    {queryParams:
        
      {
        prof: JSON.stringify(professor)},
        skipLocationChange: true});
    

  }

  editar(professor: Professor){
    console.log(professor);
  }






}

  



