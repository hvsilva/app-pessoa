import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {PessoaService} from '../../services/pessoa.service';
import {Pessoa} from '../../services/pessoa';
import {Response} from '../../services/response';

@Component({
    selector: 'app-consulta-pessoa',
    templateUrl: './consulta.component.html',
    styleUrls:["./consulta.component.css"]
  })
  export class ConsultaComponent implements OnInit {

    public paginaAtual = 1; 
    filtro: string;
  
    private pessoas: Pessoa[] = new Array();
    private titulo:string;

    constructor(private pessoaService: PessoaService,
                private router: Router){}
  
    ngOnInit() {  
      this.titulo = "Registros Cadastrados";

      this.pessoaService.getPessoas().subscribe(
         data => {
             this.pessoas = data
         },
         error => {
              console.log(error);
        })
        
    }
    
    excluir(id:number, index:number):void {      
      if(confirm("Deseja realmente excluir esse registro?")){
           
              this.pessoaService.excluirPessoa(id).subscribe(response => {  

              let res:Response = <Response>response;     
              
              if(res.id == 1){
                alert(res.mensagem);
                this.pessoas.splice(index,1);
              } else {                        
                alert(res.mensagem);
              }
          },
          erro => {alert(erro);}); 
       }

    }

    editar(id:number):void{
      this.router.navigate(['/cadastro-pessoa',id]);      
    }

    castroContato(id:number):void{
      this.router.navigate(['/cadastro-contato',id]);      
    }
  
  }