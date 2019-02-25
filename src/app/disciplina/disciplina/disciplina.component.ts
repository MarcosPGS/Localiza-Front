import { Disciplina } from './../../../dominio/Disciplina';
import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { DisciplinaService } from '../disciplina.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-disciplina',
  templateUrl: './disciplina.component.html',
  styleUrls: ['./disciplina.component.css']
})
export class DisciplinaComponent implements OnInit {
  cols: any[] = [];
  mostarDialogo: boolean = false;
  disciplina:Disciplina= new Disciplina(); 
  
  @Input() listaDisciplina: Disciplina[]=[];


  constructor(private ds: DisciplinaService) { }

  ngOnInit() {   
    this.cols = [
      { field: 'idCurso', header: 'ID' },
      { field: 'nome', header: 'NOME' },
      { field: 'diaDaSemana', header: 'DIA DA SEMANA' },
      { field: 'bloco', header: 'BLOCO' },      
      { field: 'sala', header: 'SALA' },
      { field: 'opcoes', header: 'OPÇÔES' }

    ];
  }

  novo() {

    this.mostarDialogo = true;
  }


}
