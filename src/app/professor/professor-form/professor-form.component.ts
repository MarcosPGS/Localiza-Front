import { Professor } from './../../../dominio/Professor';
import { Router, ActivatedRoute } from '@angular/router';
import { Disciplina } from './../../../dominio/Disciplina';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-professor-form',
  templateUrl: './professor-form.component.html',
  styleUrls: ['./professor-form.component.css']
})
export class ProfessorFormComponent implements OnInit {
professor: Professor = new Professor();
  constructor(private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(dadosDaPesquisa=>{
      console.log(JSON.parse(dadosDaPesquisa.prof));

      this.professor = JSON.parse(dadosDaPesquisa.prof);
      
    });
  }

  voltar(){
  this.router.navigate(["/localiza/pesquisa"]);
  }

}
