import { Bloco } from './Bloco';
import { Disciplina } from './Disciplina';
import { Usuario } from './Usuario';
import { Professor } from './Professor';
import { Curso } from './Curso';

export class FiltroProfessor{


   disciplina: Disciplina = new Disciplina();

    professor: Professor = new Professor();

    curso: Curso = new Curso();

    bloco: Bloco = new Bloco();
    constructor(){

    }
}