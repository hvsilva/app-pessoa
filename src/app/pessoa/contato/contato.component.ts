import { Component, OnInit } from '@angular/core';

import {Router} from '@angular/router';
import {ActivatedRoute} from '@angular/router';
import {Observable} from 'rxjs';

import {PessoaService} from '../../services/pessoa.service';
import {ContatoService} from '../../services/contato.service';
import {Pessoa} from '../../services/pessoa';
import {Contato} from '../../services/contato';
import {Response} from '../../services/response';
@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.css']
})
export class ContatoComponent implements OnInit {  

  filtro: string;

  titulo:string;
  private contatos: Contato[] = new Array();
  private pessoas: Pessoa[] = new Array();

  pessoa:Pessoa = new Pessoa();
  contato:Contato = new Contato();
 

  constructor(private pessoaService: PessoaService, private contatoService: ContatoService,
             private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(parametro=>{           
        this.titulo = "Cadastro de Contato";         
 
        this.pessoaService.getPessoa(Number(parametro["id"])).subscribe(
          data => {
              this.contato.pessoa = data         
          },
          error => {
               console.log(error);
         })
        
        
        this.pessoaService.getPessoa(Number(parametro["id"])).subscribe(
          data => {
              this.contatos = data.contato   
          },
          error => {
               console.log(error);
         })

    });     
    
  }

  salvar():void { 
      this.contatoService.addContato(this.contato).subscribe(response => {               
          
      let res:Response = <Response>response;

      if(res.id == 1){
       alert(res.mensagem);
       window.location.reload();     
      } else{     
        alert(res.mensagem);
      }
    },
    (erro) => {                 
       alert(erro);
    });

  }

}
