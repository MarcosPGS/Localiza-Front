import { SalaService } from './../../sala/sala.service';
import { DiaSemana } from './../../../dominio/DiaSemana';
import { Disciplina } from './../../../dominio/Disciplina';
import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { DisciplinaService } from '../disciplina.service';
import Swal from 'sweetalert2'
import { DiaSemanaService } from 'src/app/dia-semana/dia-semana.service';
import { Logs } from 'selenium-webdriver';
import { BlocoService } from 'src/app/bloco/bloco.service';
import { Bloco } from 'src/dominio/Bloco';
import { Sala } from 'src/dominio/Sala';


@Component({
  selector: 'app-disciplina',
  templateUrl: './disciplina.component.html',
  styleUrls: ['./disciplina.component.css']
})
export class DisciplinaComponent implements OnInit {
  cols: any[] = [];
  mostarDialogo: boolean = false;
  disciplina:Disciplina= new Disciplina(); 
  bloco: Bloco = new Bloco();
  listaDiaSemana:DiaSemana[] = [];
  listaDisciplinas: Disciplina[] = [];
  listaBloco: Bloco[] =[];
  listaSala: Sala[]=[];
  
  
  @Input() listaDisciplina: Disciplina[]=[];


  constructor(private ds: DisciplinaService, private dss:DiaSemanaService, private bs: BlocoService, private ss: SalaService) { }

  ngOnInit() {   
    this.cols = [
      { field: 'idCurso', header: 'ID' },
      { field: 'nome', header: 'NOME' },
      { field: 'diaDaSemana', header: 'DIA DA SEMANA' },
      { field: 'bloco', header: 'BLOCO' },      
      { field: 'sala', header: 'SALA' },
      { field: 'opcoes', header: 'OPÇÔES' }

    ];
   

    //listar disciplina
    this.ds.listar().subscribe(dadosDoServidor=>{
      this.listaDisciplinas = dadosDoServidor;  
    },error=>{
    });

    // lista dia da semana
    this.dss.listar().subscribe(dadosDoServidor=>{
      this.listaDiaSemana = dadosDoServidor;   
    },error=>{
    });

     //listar bloco
     this.bs.listar().subscribe(dadosDoServidor=>{
      this.listaBloco = dadosDoServidor;  
    },error=>{
    });

        //listar sala
        this.ss.listar().subscribe(dadosDoServidor=>{
          this.listaSala = dadosDoServidor;  
        },error=>{
        });

   }

  novo() {

    this.mostarDialogo = true;
  }


}
