import { Component, OnInit } from '@angular/core';
import { Curso } from 'src/dominio/Curso';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { CursoService } from '../curso.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-curso',
  templateUrl: './curso.component.html',
  styleUrls: ['./curso.component.css']
})
export class CursoComponent implements OnInit {
  cols: any[] = [];
  curso:Curso= new Curso();
  mostarDialogo: boolean = false;
  formulario: FormGroup;
  constructor(private cs: CursoService, private fb: FormBuilder) { }

  ngOnInit() {

    this.formulario = this.fb.group({

      nome: new FormControl('', Validators.compose([Validators.required])),
      semestre: new FormControl('', Validators.compose([Validators.required])),
      turno: new FormControl('', Validators.compose([Validators.required]))
     
    });


    this.cols = [
      { field: 'idCurso', header: 'ID' },
      { field: 'nome', header: 'NOME' },
      { field: 'semestre', header: 'SEMESTRE' },
      { field: 'turno', header: 'TURNO' },      
      { field: 'opcoes', header: 'OPÇÔES' }

    ];
  }


  novo() {

    this.mostarDialogo = true;
  }

  

}
