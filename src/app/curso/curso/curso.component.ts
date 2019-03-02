
import { Component, OnInit } from '@angular/core';
import { Curso } from 'src/dominio/Curso';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { CursoService } from '../curso.service';
import Swal from 'sweetalert2'
import { Semestre } from 'src/dominio/Semestre';
import { Turno } from 'src/dominio/Turno';
import { TurnoService } from 'src/app/turno/turno.service';
import { SemestreService } from 'src/app/semestre/semestre.service';

@Component({
  selector: 'app-curso',
  templateUrl: './curso.component.html',
  styleUrls: ['./curso.component.css']
})
export class CursoComponent implements OnInit {
  cols: any[] = [];
  curso:Curso= new Curso();
  mostarDialogo: boolean = false;
  listaCurso: Curso[] = [];
  listaSemestre: Semestre[]=[];
  listaTurno: Turno[]= [];
  
  constructor(private cs: CursoService, private ss: SemestreService, private ts: TurnoService) { }

  ngOnInit() {   

    this.cols = [
      { field: 'idCurso', header: 'ID' },
      { field: 'nome', header: 'NOME' },
      { field: 'semestre', header: 'SEMESTRE' },
      { field: 'turno', header: 'TURNO' },      
      { field: 'opcoes', header: 'OPÇÔES' }

    ];
 //listar curso
 this.cs.listar().subscribe(dadosDoServidor=>{
  this.listaCurso = dadosDoServidor;         
},error=>{
});

//listar semestre
this.ss.listar().subscribe(dadosDoServidor=>{
  this.listaSemestre = dadosDoServidor;  
},error=>{
});

// lista turno
this.ts.listar().subscribe(dadosDoServidor=>{
  this.listaTurno = dadosDoServidor;   
},error=>{
});


  }


  novo() {

    this.mostarDialogo = true;
  }

  

}
