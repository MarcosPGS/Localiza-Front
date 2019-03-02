import { ListaProfessorPesquisa } from './../../../dominio/ListaProfessorPesquisa';
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
  listaProfessorPesquisa: ListaProfessorPesquisa[] = [];
  listaCursos: Curso[] = [];
  listaDisciplinas: Disciplina[] = [];
  filtro: FiltroProfessor = new FiltroProfessor();

  listaProfessores: Professor[] = [];

  constructor(private sc: CursoService, private ds: DisciplinaService, private ps: ProfessorService,
    private router: Router) { }

  ngOnInit() {

    this.sc.listar().subscribe(dadosDoServidor => {
      this.listaCursos = dadosDoServidor;
    }, error => {
    });
    this.ds.listar().subscribe(dadosDoServidor => {
      this.listaDisciplinas = dadosDoServidor;
    }, error => {
    });

  }

  pesquisar() {
    this.ps.pesquisar(this.filtro).subscribe(dadosDoServidor => {
      this.listaProfessores = dadosDoServidor;
     

      this.listaProfessorPesquisa = [];
      for (let index = 0; index < this.listaProfessores.length; index++) {
        const professor= this.listaProfessores[index];
        let linha:  ListaProfessorPesquisa = new ListaProfessorPesquisa();
        linha.matricula = professor.matricula;
        linha.nome = professor.nome;

    

        let primeiraDisciplina: string = '';
        let listaDisciplinasJunto: string = '';
        let listaCursosJunto: string = '';
        let primeiraVezDisciplina:boolean = true;
        let primeiraVezLinha:boolean = true;
        let primeiraVezCurso:boolean=true;
        for (let index = 0; index < professor.disciplinas.length; index++) {
          const disciplina = professor.disciplinas[index];
          const disciplinaAnt = professor.disciplinas[index-1];
          
          if (!primeiraVezLinha && disciplina.nome !=disciplinaAnt.nome){
            if (primeiraVezDisciplina) {
              primeiraDisciplina = disciplina.nome;
              listaDisciplinasJunto = listaDisciplinasJunto + primeiraDisciplina;
              primeiraVezDisciplina=false;
            }else{
              if (disciplina.nome != professor.disciplinas[index-1].nome){
                listaDisciplinasJunto = listaDisciplinasJunto + ', ' + disciplina.nome;
              }
            }
         
        
         
           
            
          
         
          
          
        let primeiraCurso: string = '';
        listaCursosJunto = '';
        primeiraVezCurso=true;
        for (let index = 0; index < disciplina.cursos.length; index++) {
          const curso = disciplina.cursos[index];
          
          if (primeiraVezCurso) {
            primeiraCurso = curso.nome;
            listaCursosJunto = listaCursosJunto + primeiraCurso;
            primeiraVezCurso = false;
          }else{
            if (curso.nome != disciplina.cursos[index-1].nome){
              listaCursosJunto = listaCursosJunto + ', ' + curso.nome;
            }
          }
         
         
          


        }
        linha.cursos = listaCursosJunto;

        }
        linha.disciplinas = listaDisciplinasJunto;
      }
       
       
        
        this.listaProfessorPesquisa.push(linha);
        

      }


      console.log(this.listaProfessorPesquisa);
      

    }, error => {
    });
  }

  visualizar(professor: Professor) {
    this.router.navigate(["/localiza/formulario"],
      {
        queryParams:
        {
          prof: JSON.stringify(professor)
        },
        skipLocationChange: true
      });

  }

  editar(professor: Professor) {
    console.log(professor);
  }






}





