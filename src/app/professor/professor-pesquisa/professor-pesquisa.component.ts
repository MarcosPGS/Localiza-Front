import { Curso } from './../../../dominio/Curso';
import { CursoService } from './../../curso/curso.service';
import { Component, OnInit } from '@angular/core';
import { SelectItem } from 'primeng/components/common/selectitem';

@Component({
  selector: 'app-professor-pesquisa',
  templateUrl: './professor-pesquisa.component.html',
  styleUrls: ['./professor-pesquisa.component.css']
})
export class ProfessorPesquisaComponent implements OnInit {
  cursos: SelectItem[];
  cursoSelecionados: Curso[];


  constructor(private cs: CursoService) { }

  ngOnInit() {
    this.listarCursos();
  }


  listarCursos() {
    this.cs.listar().subscribe(
      dadosDoServidor => {
        this.cursoSelecionados = dadosDoServidor;
      }, error => {

      });
  }

}

