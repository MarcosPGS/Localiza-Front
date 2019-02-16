import { Permissao } from './Permissao';

export class Usuario{

    idUsuario: number;
    login: string;
    senha: string;
    nome: string;
    
    permissoes: Permissao[] = [];
   
    constructor(){

    }
}