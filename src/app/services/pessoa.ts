import { Contato } from './contato';

export class Pessoa {
    id: number;
    nome: string;
    rg: string;
    cpf: string;   
    dtnascimento: string;   
    ativo:boolean;
    contato:Contato;
  }
  