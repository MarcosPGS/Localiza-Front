import { Professor } from './../../../dominio/Professor';
import { ProfessorService } from './../professor.service';
import { FiltroProfessor } from './../../../dominio/FiltroProfessor';
import { Curso } from './../../../dominio/Curso';
import { CursoService } from './../../curso/curso.service';
import { Component, OnInit } from '@angular/core';
import { SelectItem } from 'primeng/components/common/selectitem';
import { Router } from '@angular/router';

@Component({
  selector: 'app-professor-pesquisa',
  templateUrl: './professor-pesquisa.component.html',
  styleUrls: ['./professor-pesquisa.component.css']
})
export class ProfessorPesquisaComponent implements OnInit {
  
  listaCursos:Curso[] = [];
filtro: FiltroProfessor = new FiltroProfessor();

listaProfessores: Professor[]=[];

  constructor(private sc: CursoService, private ps: ProfessorService, private router: Router) { }

  ngOnInit() {

    this.sc.listar().subscribe(dadosDoServidor=>{
      this.listaCursos = dadosDoServidor;

      console.log(this.listaCursos);
      
    },error=>{

    })
   
  }

pesquisar(){
  this.ps.pesquisar(this.filtro).subscribe(dadosDoServidor=>{
    this.listaProfessores =dadosDoServidor;
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

  



