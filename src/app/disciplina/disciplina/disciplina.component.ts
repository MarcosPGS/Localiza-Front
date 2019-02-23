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

  mostarDialogo: boolean = false;
  disciplina:Disciplina= new Disciplina();
  cols: any[] = [];
  formulario: FormGroup;
  @Input() listaDisciplina: Disciplina[]=[];


  constructor(private ds: DisciplinaService, private fb: FormBuilder) { }

  ngOnInit() {

    this.formulario = this.fb.group({

      nome: new FormControl('', Validators.compose([Validators.required])),
      diaDaSemana: new FormControl('', Validators.compose([Validators.required])),
      bloco: new FormControl('', Validators.compose([Validators.required])),
      sala: new FormControl('', Validators.compose([Validators.required]))

    });

    this.cols = [
      { field: 'idDisciplina', header: 'ID' },
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
  taNaListat(d : Disciplina){
    for(let i = 0; i < this.ds.lista.length; i++){
      if(this.ds.lista[i].nome == d.nome && this.ds.lista[i].idDisciplina == d.idDisciplina){
        return true;
      } 
    }
    return false;
  }

  modalExcluir(d: Disciplina) {
    this.ds.deletar(d);
    Swal({
      type: 'success',
      title: "Deletado!",
      text: "Registro Deletado Com Sucesso!",
      showConfirmButton: false,
      timer: 2500
    });
  }


  salvarOuAtualizar() {
    if( !this.taNaListat(this.disciplina)){
      this.ds.adicionar(this.disciplina);
      //this.emissorTelefoneFilho.emit(this.ds.lista);
      this.mostarDialogo = false;
      this.disciplina = new Disciplina();

    } else{
      alert('Numero Duplicado!');
    }
  }

}
